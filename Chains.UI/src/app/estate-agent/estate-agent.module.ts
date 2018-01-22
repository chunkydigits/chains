import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EstateAgentPropertiesComponent } from './components/properties/properties.component';
import { estateAgentRouting } from './estate-agent.routing';
import { PropertyModule } from '../shared/modules/property.module';
import { EstateAgentHomeComponent } from './components/home/home.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,  
        estateAgentRouting, 
        PropertyModule
    ], 
    declarations: [
        EstateAgentPropertiesComponent,
        EstateAgentHomeComponent
    ]
})

export class EstateAgentModule {}