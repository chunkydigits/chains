import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstateAgentPropertiesComponent } from './components/properties/properties.component';
import { PropertyUpsertComponent } from './../shared/components/property/property-upsert.component';
import { CanDeactivateGuard } from './../shared/guards/can-deactivate-guard.service';
import { EstateAgentHomeComponent } from './components/home/home.component';
    
const estateAgentRoutes: Routes = [
    {
        path: '', 
        children: [
            {
                path: '',
                component: EstateAgentHomeComponent
            },
            {
                path: 'property-list',
                component: EstateAgentPropertiesComponent
            },
            {
                path: 'add-property',
                canDeactivate: [CanDeactivateGuard],
                component: PropertyUpsertComponent
            }
        ]
    }
];

export const estateAgentRouting: ModuleWithProviders = RouterModule.forChild(estateAgentRoutes);