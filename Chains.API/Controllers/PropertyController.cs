using System;
using System.Collections.Generic;
using System.Web.Http;
using Chains.API.Models;
using Chains.API.Repositories;
using Chains.API.Models.ViewModels;
using log4net;
using System.Reflection;

namespace Chains.API.Controllers
{
    [RoutePrefix("api/property")]
    public class PropertyController : ApiController
    {
        private readonly IPropertyRepository _propertyRepository;
        private readonly IRightMoveRepository _rightMoveRepository;
        private readonly ILog _logger = LogManager.GetLogger(MethodBase.GetCurrentMethod().DeclaringType);

        public PropertyController(IPropertyRepository propertyRepository, IRightMoveRepository rightMoveRepository)
        {
            _propertyRepository = propertyRepository;
            _rightMoveRepository = rightMoveRepository;
        }

        [HttpGet]
        // GET: Property
        public Property Get(Guid propertyId)
        {
            return new Property
            {
                Id = Guid.NewGuid(), 
                DisplayName = "3 Dovedale Close, Crofton", 
                RightMoveIdentifier = "1212233322"
            };
        }

        [HttpGet]
        [Route("property-list")]
        public List<PropertyInformationViewModel> GetProperties(Guid? searcherId)
        {
            try
            {
                var x = _propertyRepository.GetAllProperties();
                return x;
            }
            catch (Exception ex)
            {
                _logger.WarnFormat("GetProperties: Not managed to retrieve properties for the searcherId: {0}", searcherId.HasValue ? searcherId.ToString() : "<NULL>");
                return null;
            }   
        }

        // POST api/values
        [Route("upsert")]
        [HttpPost]
        public bool Post([FromBody]PropertyInformationViewModel property)
        {
            return _propertyRepository.UpsertProperty(property);
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
            throw new NotImplementedException();
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        [HttpGet]
        [Route("rightmove-image/{rightMoveIdentifier}")]
        public string GetRightMoveImageUrl(string rightMoveIdentifier)
        {
            return _rightMoveRepository.GetImageUrl(rightMoveIdentifier);
        }

        [HttpGet]
        [Route("rightmove-details/{rightMoveIdentifier}")]
        public RightMoveDetailViewModel GetRightMoveDetails(string rightMoveIdentifier)
        {
            return _rightMoveRepository.GetAllDetails(rightMoveIdentifier);
        }
    }
}