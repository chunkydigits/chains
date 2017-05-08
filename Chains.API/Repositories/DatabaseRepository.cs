using System;
using System.Collections.Generic;
using System.Linq;
using Chains.API.Models;

namespace Chains.API.Repositories
{
    public class DatabaseRepository : IDatabaseRepository
    {
        public List<Property> GetAllProperties(ChainsDBEntities context)
        {
            return context.Properties.ToList();
        }
    }
}