"use strict";
var router_1 = require('@angular/router');
var estate_agent_component_1 = require('./estate-agent.component');
var estateAgentRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: estate_agent_component_1.EstateAgentComponent
            }]
    }
];
exports.estateAgentRouting = router_1.RouterModule.forChild(estateAgentRoutes);
//# sourceMappingURL=estate-agent.routing.js.map