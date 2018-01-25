import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicUserDashboardComponent } from './components/dashboard/dashboard.component';
import { PublicUserInformationComponent } from './components/information/information.component';
import { AuthGuard } from '../shared/guards/auth-guard.service';
import { tokenNotExpired } from 'angular2-jwt'; 

const publicUserRoutes: Routes = [  
    {
        path: '', 
        children: [
            {
                path: '',
                component: PublicUserInformationComponent
            },
            {
                path: 'dashboard',
                component: PublicUserDashboardComponent, 
                canActivate: [AuthGuard]
            }]
    }
];

export const publicUserRouting: ModuleWithProviders = RouterModule.forChild(publicUserRoutes);