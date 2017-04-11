"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const contact_component_1 = require("./contact/contact.component");
const home_component_1 = require("./home/home.component");
const not_found_component_1 = require("./not-found/not-found.component");
const appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    {
        path: 'secretAbout',
        redirectTo: '/about',
        pathMatch: 'full'
    },
    {
        path: 'about',
        loadChildren: 'app/about/about.module#AboutModule'
    },
    {
        path: 'estate-agent',
        loadChildren: 'app/estate-agent/estate-agent.module#EstateAgentModule'
    },
    {
        path: 'public-user',
        loadChildren: 'app/public-user/public-user.module#PublicUserModule'
    },
    {
        path: 'solicitor',
        loadChildren: 'app/solicitor/solicitor.module#SolicitorModule'
    },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map