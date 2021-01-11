using System.Security.Claims;
using System.Threading.Tasks;
using backend.Core;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;

namespace backend.Functions
{
    public class Sing : AuthorizedFunction
    {
        private readonly IBackendService _backendService;

        public Sing(IHttpContextAccessor httpContextAccessor, IBackendService backendService) : base(
            httpContextAccessor)
        {
            _backendService = backendService;
        }

        [FunctionName("sing")]
        [RequiredRoles("Sing")]
        public async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = null)]
            HttpRequest req,
            ClaimsPrincipal principal,
            ILogger log)
        {
            return new OkObjectResult(await _backendService.Sing);
        }
    }
}