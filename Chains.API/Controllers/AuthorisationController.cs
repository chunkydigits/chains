using System;
using System.Collections.Generic;
using System.Web.Http;
using Chains.API.Models;
using Chains.API.Repositories;
using Chains.API.Models.ViewModels;
using log4net;
using System.Reflection;
using WebApi.Controllers;

namespace Chains.API.Controllers
{
    //[Authorize] 
    [RoutePrefix("api/authorisation")]
    public class AuthorisationController : ApiController
    {
        private readonly IAuthorisationRepository _authorisationRepository;
        private readonly ILog _logger = LogManager.GetLogger(MethodBase.GetCurrentMethod().DeclaringType);

        public AuthorisationController(IAuthorisationRepository authorisationRepository)
        {
            _authorisationRepository = authorisationRepository;
        }

        [HttpGet]
        // GET: Property
        public User Get(string userIdentifier)
        {
            return _authorisationRepository.GetUserScope(userIdentifier);
        }
    }
}