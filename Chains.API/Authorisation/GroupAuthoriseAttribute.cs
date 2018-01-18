using System.Configuration;
using System.Linq;
using System.Security.Claims;
using System.Web.Http;
using System.Web.Http.Controllers;

namespace WebApi.Controllers
{
    public class GroupAuthoriseAttribute : AuthorizeAttribute
    {
        private readonly string _group;
        private readonly string _namespace = ConfigurationManager.AppSettings["Auth0:Namespace"];

        public GroupAuthoriseAttribute(string group)
        {
            _group = group;
        }

        public override void OnAuthorization(HttpActionContext actionContext)
        {
            base.OnAuthorization(actionContext);

            // Get the Auth0 domain, in order to validate the issuer
            var domain = $"https://{ConfigurationManager.AppSettings["Auth0:Domain"]}/";

            // Get the claim principal
            ClaimsPrincipal principal = actionContext.ControllerContext.RequestContext.Principal as ClaimsPrincipal;

            // Get the scope clain. Ensure that the issuer is for the correcr Auth0 domain
            var groupClaim = principal?.Claims.FirstOrDefault(c => c.Type == $"{_namespace}/groups" && c.Issuer == domain);
            if (groupClaim != null)
            {
                // Split scopes
                var groups = groupClaim.Value.Split(' ');

                // Succeed if the scope array contains the required scope
                if (groups.Any(s => s == _group))
                    return;
            }

            HandleUnauthorizedRequest(actionContext);
        }
    }
}