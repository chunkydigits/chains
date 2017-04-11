import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChainVisualisationComponent } from './shared/components/chain-visualisation/chain-visualisation.component';

const appRoutes:Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'secretAbout',
        redirectTo: '/about',
        pathMatch: 'full'
    },
    {
        path: 'about',
        loadChildren: 'app/about/about.module#AboutModule'
    },
    {
        path: 'estate-agent',
        loadChildren: 'app/estate-agent/estate-agent.module#EstateAgentModule'
    },
    {
        path: 'public-user',
        loadChildren: 'app/public-user/public-user.module#PublicUserModule'
    },
    {
        path: 'solicitor',
        loadChildren: 'app/solicitor/solicitor.module#SolicitorModule'
    },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: NotFoundComponent }
]

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);