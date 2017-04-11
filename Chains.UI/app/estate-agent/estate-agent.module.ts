import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EstateAgentComponent } from './estate-agent.component';
import { estateAgentRouting } from './estate-agent.routing';
import { PropertyModule } from '../shared/modules/property.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,  
        estateAgentRouting, 
        PropertyModule
    ], 
    declarations: [
        EstateAgentComponent
    ]
})

export class EstateAgentModule {}