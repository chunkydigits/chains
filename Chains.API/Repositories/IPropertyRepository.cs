﻿using System;
using System.Collections.Generic;
using Chains.API.Models;
using Chains.API.Models.ViewModels;

namespace Chains.API.Repositories
{
    public interface IPropertyRepository
    {
        List<PropertyInformationViewModel> GetAllProperties();
        List<PropertyCheckListitem> GetCheckListItemsForProperty(Guid id);
        bool AddProperty(PropertyInformationViewModel viewModel);
    }
}