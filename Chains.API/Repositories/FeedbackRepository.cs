using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using AutoMapper;
using Chains.API.Models;
using Chains.API.Models.ViewModels;
using log4net;
using WebGrease.Css.Extensions;

namespace Chains.API.Repositories
{
    public class FeedbackRepository : IFeedbackRepository
    {
        private readonly IDatabaseRepository _databaseRepository;
        private readonly IGuidRepository _guidRepository;
        private readonly IDateRepository _dateRepository;
        private readonly ILog _logger = LogManager.GetLogger(MethodBase.GetCurrentMethod().DeclaringType);

        public FeedbackRepository(IDatabaseRepository databaseRepository, IGuidRepository guidRepository, IDateRepository dateRepository)
        {
            _databaseRepository = databaseRepository;
            _guidRepository = guidRepository;
            _dateRepository = dateRepository;
        }
        
        public bool Add(Feedback feedbackItem)
        {
            feedbackItem.AddedOn = _dateRepository.Now();

            try
            {
                using (var context = new ChainsDBEntities())
                {
                    
                    _databaseRepository.AddItem<Feedback>(context, feedbackItem);
                    
                    return true;
                }
            }
            catch (Exception ex)
            {
                _logger.ErrorFormat("Could not save the feedback item. \r\nName: {0}\r\nEmail: {1}\r\nDetails: {2}\r\n\r\nException: {3}", feedbackItem.Name, feedbackItem.Email, feedbackItem.Details, ex.Message);
                return false;
            }
        }
        
        #region Supporting Methods 

        #endregion 
    }
}