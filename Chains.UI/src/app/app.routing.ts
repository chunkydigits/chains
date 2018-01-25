import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChainVisualisationComponent } from './shared/components/chain-visualisation/chain-visualisation.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthGuard } from './shared/guards/auth-guard.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'callback', component: CallbackComponent},
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
        loadChildren: 'app/public-user/public-user.module#PublicUserModule',
        canActivateChild: [AuthGuard],
        canActivate: [AuthGuard]
    },
    {
        path: 'solicitor',
        loadChildren: 'app/solicitor/solicitor.module#SolicitorModule',
        canActivateChild: [AuthGuard],
        canActivate: [AuthGuard]
    },
    { path: 'contact', component: ContactComponent },
    { path: 'unauthorised', component: HomeComponent },
    { path: '**', component: NotFoundComponent }
]

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);