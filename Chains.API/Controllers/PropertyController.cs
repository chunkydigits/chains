﻿using System;
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
        
        [GroupAuthorise("GOD")]
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
            return _propertyRepository.Upsert(property);
        }
        
        [Route("delete/{id}/{username}")]
        [HttpGet]
        public bool Delete(Guid id, string username)
        {
            return _propertyRepository.Delete(id, username);
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