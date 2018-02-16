using System;
using System.Collections.Generic;
using System.Linq;
using Chains.API.Controllers;
using Chains.API.Models;

namespace Chains.API.Repositories
{
    public interface IAuthorisationRepository
    {
        // Generic
        User GetUserScope(string userIdentifier);
    }
}