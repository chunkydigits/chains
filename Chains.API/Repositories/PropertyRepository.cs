using System;
using System.Collections.Generic;
using System.Linq;
using Chains.API.Models;

namespace Chains.API.Repositories
{
    public class PropertyRepository : IPropertyRepository
    {
        private readonly IDatabaseRepository _databaseRepository;

        public PropertyRepository(IDatabaseRepository databaseRepository)
        {
            _databaseRepository = databaseRepository;
        }

        public List<Property> GetAllProperties()
        {
            using (var context = new ChainsDBEntities())
            {
                var x = _databaseRepository.GetAllProperties(context);
                return x;
            }
        }
    }
}