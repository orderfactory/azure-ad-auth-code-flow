using System;
using System.Net;

namespace backend
{
    internal class AuthorizationException : Exception
    {
        public AuthorizationException(HttpStatusCode statusCode, string message)
            : base(message)
        {
            HttpStatusCode = statusCode;
            ErrorMessage = message;
        }

        public HttpStatusCode HttpStatusCode { get; }
        public string ErrorMessage { get; }
    }
}