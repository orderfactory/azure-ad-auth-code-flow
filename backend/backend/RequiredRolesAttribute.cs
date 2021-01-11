using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;
using JetBrains.Annotations;
using Microsoft.Azure.WebJobs.Host;

#pragma warning disable 618

namespace backend
{
    internal class RequiredRolesAttribute : FunctionInvocationFilterAttribute
    {
        private readonly string[] _requiredRoles;

        public RequiredRolesAttribute(params string[] requiredRoles)
        {
            _requiredRoles = requiredRoles;
        }

        public override Task OnExecutingAsync(FunctionExecutingContext executingContext,
            CancellationToken cancellationToken)
        {
            CheckPrincipal(executingContext);

            var claimsPrincipal = (ClaimsPrincipal) executingContext.Arguments["principal"];
            var roles = claimsPrincipal.Claims.Where(e => e.Type == "roles").Select(e => e.Value).ToArray();

            var isAuthorized = _requiredRoles.All(roles.Contains);
            if (isAuthorized) return Task.CompletedTask;

            throw new AuthorizationException(HttpStatusCode.Unauthorized,
                "Authentication failed. User does not claim a required role.");
        }


        [AssertionMethod]
        private static void CheckPrincipal(FunctionExecutingContext executingContext)
        {
            if (!executingContext.Arguments.ContainsKey("principal"))
                throw new AuthorizationException(HttpStatusCode.Unauthorized,
                    "Authentication failed. Missing principle.");
        }
    }
}