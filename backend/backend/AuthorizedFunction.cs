using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Azure.WebJobs.Host;

#pragma warning disable 618

namespace backend
{
    public abstract class AuthorizedFunction : IFunctionExceptionFilter
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        protected AuthorizedFunction(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task OnExceptionAsync(FunctionExceptionContext exceptionContext,
            CancellationToken cancellationToken)
        {
            if (exceptionContext.Exception.InnerException is AuthorizationException ex)
            {
                var response = _httpContextAccessor.HttpContext.Response;
                response.Headers.Add("Content-Length", $"{ex.ErrorMessage.Length}");
                response.StatusCode = (int)ex.HttpStatusCode;
                await response.WriteAsync(ex.ErrorMessage, cancellationToken);
            }
        }
    }
}
