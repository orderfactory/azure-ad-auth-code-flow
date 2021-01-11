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
    public class SitAndDoNothing
    {
        private readonly IBackendService _backendService;

        public SitAndDoNothing(IBackendService backendService)
        {
            _backendService = backendService;
        }

        [FunctionName("do-nothing")]
        public async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = null)]
            HttpRequest req,
            ClaimsPrincipal principal,
            ILogger log)
        {
            return new OkObjectResult(await _backendService.SitAndDoNothing);
        }
    }
}