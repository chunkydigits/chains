import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstateAgentComponent } from './estate-agent.component';
import { PropertyUpsertComponent } from './../shared/components/property/property-upsert.component';
import { CanDeactivateGuard } from './../shared/guards/can-deactivate-guard.service';
    
const estateAgentRoutes: Routes = [
    {
        path: '', 
        children: [
            {
                path: '',
                component: EstateAgentComponent
            },
            {
                path: 'add-property',
                canDeactivate: [CanDeactivateGuard],
                component: PropertyUpsertComponent
            }
            //,
            //{
            //    path: 'properties',
            //    component: PropertyListViewComponent
            //}
        ]
    }
];

export const estateAgentRouting: ModuleWithProviders = RouterModule.forChild(estateAgentRoutes);