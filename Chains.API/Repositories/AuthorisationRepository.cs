using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Core;
using System.Data.Entity.Migrations;
using System.Linq;
using Chains.API.Controllers;
using Chains.API.Models;

namespace Chains.API.Repositories
{
    public class AuthorisationRepository : IAuthorisationRepository
    {
        private DbContext _context = new ChainsDBEntities();
        
        public UserScope GetUserScope(string userIdentifier)
        {
            throw new NotImplementedException();
            //return _context.GetUserScope(userIdentifier);
        }
    }
}