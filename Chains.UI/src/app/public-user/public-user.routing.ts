import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicUserComponent } from './public-user.component';
import { AuthGuard } from '../shared/guards/auth-guard.service';
import { tokenNotExpired } from 'angular2-jwt'; 

const publicUserRoutes: Routes = [  
    {
        path: '', 
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            {
                path: '',
                component: PublicUserComponent
            }]
    }
];

export const publicUserRouting: ModuleWithProviders = RouterModule.forChild(publicUserRoutes);