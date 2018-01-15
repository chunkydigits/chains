using System;
using System.Collections.Generic;
using System.Linq;
using Chains.API.Models;
using Chains.API.Models.ViewModels;

namespace Chains.API.Repositories
{
    public interface IRightMoveRepository
    {
        string GetImageUrl(string rightMoveIdentifier);
        string GetRightMoveUrl(string rightMoveIdentifier);
        string GetPropertyAskingPrice(string rightMoveIdentifier);
        RightMoveDetailViewModel GetAllDetails(string rightMoveIdentifier);
    }
}