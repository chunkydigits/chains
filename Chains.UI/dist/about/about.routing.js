"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const about_component_1 = require("./about.component");
const about_user_component_1 = require("./about-user.component");
const about_section_component_1 = require("./about-section.component");
const about_resolve_service_1 = require("./about-resolve.service");
const about_user_resolve_service_1 = require("./about-user-resolve.service");
const aboutRoutes = [
    {
        path: '',
        component: about_section_component_1.AboutSectionComponent,
        children: [
            {
                path: '',
                component: about_component_1.AboutComponent,
                resolve: {
                    // data and resolve to complete this bit :-(
                    users: about_resolve_service_1.AboutUsersResolve
                }
            },
            {
                path: ':username',
                component: about_user_component_1.AboutUserComponent,
                resolve: {
                    user: about_user_resolve_service_1.AboutUserResolve
                }
            }
        ]
    }
];
exports.aboutRouting = router_1.RouterModule.forChild(aboutRoutes);
//# sourceMappingURL=about.routing.js.map