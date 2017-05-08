using System.Collections.Generic;
using Chains.API.Models;

namespace Chains.API.Repositories
{
    public interface IPropertyRepository
    {
        List<Property> GetAllProperties();
    }
}