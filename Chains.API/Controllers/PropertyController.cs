using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Threading.Tasks;
using System.Web.Http;
using Chains.API.Models;
using Chains.API.Repositories;
using Newtonsoft.Json;
using Chains.API.Models.ViewModels;
using log4net;
using System.Reflection;

namespace Chains.API.Controllers
{
    [RoutePrefix("api/property")]
    public class PropertyController : ApiController
    {
        private readonly IPropertyRepository _propertyRepository;
        private readonly ILog _logger = LogManager.GetLogger(MethodBase.GetCurrentMethod().DeclaringType);

        public PropertyController(IPropertyRepository propertyRepository)
        {
            _propertyRepository = propertyRepository;
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
        [Route("create")]
        public void Post(PropertyInformationViewModel property)
        {
            throw new NotImplementedException();
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
    }
}