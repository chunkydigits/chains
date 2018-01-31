using System;
using Chains.API.Repositories;
using NUnit.Framework;

namespace Chains.API.Test
{
    [TestFixture]
    public class AuthorisationTests
    {
        [Test]
        public void When_an_authorisation_token_is_requested__Then_the_token_returned_is_feasible()
        {
            AuthorisationRepository authRepo = new AuthorisationRepository();
            var authorisationHeader = authRepo.GetAccessTokenHeaderForApi();
            Assert.That(authorisationHeader.StartsWith("Bearer "));
            Assert.That(authorisationHeader.Length > 50);
        }
    }
}
