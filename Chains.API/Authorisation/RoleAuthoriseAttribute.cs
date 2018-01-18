using System.Configuration;
using System.Linq;
using System.Security.Claims;
using System.Web.Http;
using System.Web.Http.Controllers;

namespace WebApi.Controllers
{
    public class RoleAuthoriseAttribute : AuthorizeAttribute
    {
        private readonly string _role;
        private readonly string _namespace = ConfigurationManager.AppSettings["Auth0:Namespace"];

        public RoleAuthoriseAttribute(string role)
        {
            _role = role;
        }

        public override void OnAuthorization(HttpActionContext actionContext)
        {
            base.OnAuthorization(actionContext);

            // Get the Auth0 domain, in order to validate the issuer
            var domain = $"https://{ConfigurationManager.AppSettings["Auth0:Domain"]}/";

            // Get the claim principal
            ClaimsPrincipal principal = actionContext.ControllerContext.RequestContext.Principal as ClaimsPrincipal;

            // Get the scope clain. Ensure that the issuer is for the correcr Auth0 domain
            var roleClaim = principal?.Claims.FirstOrDefault(c => c.Type == $"{_namespace}/roles" && c.Issuer == domain);
            if (roleClaim != null)
            {
                // Split scopes
                var roles = roleClaim.Value.Split(' ');

                // Succeed if the scope array contains the required scope
                if (roles.Any(s => s == _role))
                    return;
            }

            HandleUnauthorizedRequest(actionContext);
        }
    }
}