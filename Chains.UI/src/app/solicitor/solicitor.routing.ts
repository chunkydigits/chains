import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitorDashboardComponent } from './components/dashboard/dashboard.component';
import { SolicitorInformationComponent } from './components/information/information.component';
import { AuthGuard } from '../shared/guards/auth-guard.service';
    
const solicitorRoutes: Routes = [
    {
        path: '', 
        children: [
            {
                path: '',
                component: SolicitorInformationComponent
            },
            {
                path: 'dashboard',
                component: SolicitorDashboardComponent, 
                canActivate: [AuthGuard]
            }]
    }
];

export const solicitorRouting: ModuleWithProviders = RouterModule.forChild(solicitorRoutes);