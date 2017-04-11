"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const public_user_component_1 = require("./public-user.component");
const auth_guard_service_1 = require("../shared/guards/auth-guard.service");
const publicUserRoutes = [
    {
        path: '',
        canActivate: [auth_guard_service_1.AuthGuard],
        canActivateChild: [auth_guard_service_1.AuthGuard],
        children: [
            {
                path: '',
                component: public_user_component_1.PublicUserComponent
            }
        ]
    }
];
exports.publicUserRouting = router_1.RouterModule.forChild(publicUserRoutes);
//# sourceMappingURL=public-user.routing.js.map