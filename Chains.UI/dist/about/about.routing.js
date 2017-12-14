"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const about_component_1 = require("./about.component");
const aboutRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: about_component_1.AboutComponent
            }
        ]
    }
];
exports.aboutRouting = router_1.RouterModule.forChild(aboutRoutes);
//# sourceMappingURL=about.routing.js.map