using System.Threading.Tasks;

namespace backend.Core
{
    public interface IBackendService
    {
        Task<string> SitAndDoNothing { get; }
        Task<string> Sing { get; }
        Task<string> Dance { get; }
        Task<string> Gamble { get; }
        Task<string> SingAndDance { get; }
        Task<string> SingDanceAndGamble { get; }
    }

    public class BackendService : IBackendService
    {
        public Task<string> SitAndDoNothing => Task.FromResult("I can sit and do nothing.");
        public Task<string> Sing => Task.FromResult("I can sing.");
        public Task<string> Dance => Task.FromResult("I can dance.");
        public Task<string> Gamble => Task.FromResult("I can gamble.");
        public Task<string> SingAndDance => Task.FromResult("I can sing and dance.");
        public Task<string> SingDanceAndGamble => Task.FromResult("I can sing, dance, and gamble.");
    }
}