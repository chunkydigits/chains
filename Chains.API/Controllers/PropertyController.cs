using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using Chains.API.Models;
using Chains.API.Repositories;
using Newtonsoft.Json;

namespace Chains.API.Controllers
{
    public class PropertyController : ApiController
    {
        private readonly IPropertyRepository _propertyRepository;

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
        public List<Property> GetProperties(Guid? searcherId)
        {
            var list = _propertyRepository.GetAllProperties();
            return list;
        }


        // POST api/values
        public void Post([FromBody]string value)
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