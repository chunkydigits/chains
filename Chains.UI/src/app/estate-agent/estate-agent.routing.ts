import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstateAgentPropertiesComponent } from './components/properties/properties.component';
import { PropertyUpsertComponent } from './../shared/components/property/property-upsert.component';
import { CanDeactivateGuard } from './../shared/guards/can-deactivate-guard.service';
import { EstateAgentDashboardComponent } from './components/dashboard/dashboard.component';
import { EstateAgentInformationComponent } from './components/information/information.component';
import { AuthGuard } from '../shared/guards/auth-guard.service';
    
const estateAgentRoutes: Routes = [
    {
        path: '', 
        children: [
            {
                path: '',
                component: EstateAgentInformationComponent
            },
            {
                path: 'dashboard',
                component: EstateAgentDashboardComponent, 
                canActivate: [AuthGuard]
            },
            {
                path: 'property-list',
                component: EstateAgentPropertiesComponent, 
                canActivate: [AuthGuard]
            },
            {
                path: 'add-property',
                canDeactivate: [CanDeactivateGuard],
                component: PropertyUpsertComponent, 
                canActivate: [AuthGuard]
            }
        ]
    }
];

export const estateAgentRouting: ModuleWithProviders = RouterModule.forChild(estateAgentRoutes);