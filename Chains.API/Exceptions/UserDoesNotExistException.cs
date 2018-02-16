using System;

namespace Chains.API.Exceptions
{
    public class UserDoesNotExistException : Exception
    {
        public UserDoesNotExistException()
        {
        }

        public UserDoesNotExistException(string userIdentifier) 
            : base($"User Identifier({userIdentifier}) not found in the database.")
        {
        }

        public UserDoesNotExistException(string userIdentifier, Exception inner)
            : base($"User Identifier({userIdentifier}) not found in the database.", inner)
        {
        }
    }
}