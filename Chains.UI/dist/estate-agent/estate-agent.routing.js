"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const estate_agent_component_1 = require("./estate-agent.component");
const property_add_component_1 = require("./../shared/components/property/property-add.component");
const can_deactivate_guard_service_1 = require("./../shared/guards/can-deactivate-guard.service");
const estateAgentRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: estate_agent_component_1.EstateAgentComponent
            },
            {
                path: 'add-property',
                canDeactivate: [can_deactivate_guard_service_1.CanDeactivateGuard],
                component: property_add_component_1.PropertyAddComponent
            }
            //,
            //{
            //    path: 'properties',
            //    component: PropertyListViewComponent
            //}
        ]
    }
];
exports.estateAgentRouting = router_1.RouterModule.forChild(estateAgentRoutes);
//# sourceMappingURL=estate-agent.routing.js.map