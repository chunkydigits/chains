import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitorComponent } from './solicitor.component';
    
const solicitorRoutes: Routes = [
    {
        path: '', 
        children: [
            {
                path: '',
                component: SolicitorComponent
            }]
    }
];

export const solicitorRouting: ModuleWithProviders = RouterModule.forChild(solicitorRoutes);