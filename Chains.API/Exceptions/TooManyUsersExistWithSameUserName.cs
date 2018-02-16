using System;

namespace Chains.API.Exceptions
{
    public class TooManyUsersExistWithSameUserName : Exception
    {
        public TooManyUsersExistWithSameUserName()
        {
        }

        public TooManyUsersExistWithSameUserName(string userIdentifier) 
            : base($"User Identifier({userIdentifier}) found multiple times in the database.")
        {
        }

        public TooManyUsersExistWithSameUserName(string userIdentifier, Exception inner) 
            : base($"User Identifier({userIdentifier}) found multiple times in the database.", inner)
        {
        }
    }
}