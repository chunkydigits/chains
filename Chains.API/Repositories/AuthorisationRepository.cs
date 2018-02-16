using System.Linq;
using Chains.API.Exceptions;
using Chains.API.Models;

namespace Chains.API.Repositories
{
    public class AuthorisationRepository : IAuthorisationRepository
    {
        private AuthenticationDBEntities _context = new AuthenticationDBEntities();
        
        public User GetUserScope(string userIdentifier)
        {
            var users = _context.Users.Where(o => o.UserIdentifier == userIdentifier);
            if (!users.Any())
                throw new UserDoesNotExistException(userIdentifier);
            if (users.Count() > 1)
                throw new TooManyUsersExistWithSameUserName(userIdentifier);
            return users.First();
        }
    }
}