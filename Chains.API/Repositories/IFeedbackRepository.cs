﻿using System;
using System.Collections.Generic;
using Chains.API.Models;
using Chains.API.Models.ViewModels;

namespace Chains.API.Repositories
{
    public interface IFeedbackRepository
    {
        bool Add(Feedback feedbackItem);
    }
}