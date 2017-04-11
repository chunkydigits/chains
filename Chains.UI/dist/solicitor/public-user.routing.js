"use strict";
var router_1 = require('@angular/router');
var public_user_component_1 = require('./public-user.component');
var publicUserRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: public_user_component_1.PublicUserComponent
            }]
    }
];
exports.publicUserRouting = router_1.RouterModule.forChild(publicUserRoutes);
//# sourceMappingURL=public-user.routing.js.map