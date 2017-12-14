"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const solicitor_component_1 = require("./solicitor.component");
const solicitorRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: solicitor_component_1.SolicitorComponent
            }
        ]
    }
];
exports.solicitorRouting = router_1.RouterModule.forChild(solicitorRoutes);
//# sourceMappingURL=solicitor.routing.js.map