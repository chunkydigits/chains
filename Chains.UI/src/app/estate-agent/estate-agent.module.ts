import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EstateAgentPropertiesComponent } from './components/properties/properties.component';
import { estateAgentRouting } from './estate-agent.routing';
import { PropertyModule } from '../shared/modules/property.module';
import { AuthGuard } from '../shared/guards/auth-guard.service';
import { EstateAgentDashboardComponent } from './components/dashboard/dashboard.component';
import { EstateAgentInformationComponent } from './components/information/information.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,  
        estateAgentRouting, 
        PropertyModule
    ], 
    declarations: [
        EstateAgentPropertiesComponent,
        EstateAgentDashboardComponent,
        EstateAgentInformationComponent
    ],
    providers: [
        AuthGuard
    ]
})

export class EstateAgentModule {}