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
    [RoutePrefix("api/feedback")]
    public class FeedbackController : ApiController
    {
        private readonly IFeedbackRepository _feedbackRepository;
        private readonly ILog _logger = LogManager.GetLogger(MethodBase.GetCurrentMethod().DeclaringType);

        public FeedbackController(IFeedbackRepository feedbackRepository)
        {
            _feedbackRepository = feedbackRepository;
        }

        // POST api/values
        [Route("add")]
        [HttpPost]
        public bool Post([FromBody]Feedback feedbackItem)
        {
            return _feedbackRepository.Add(feedbackItem);
        }
    }
}