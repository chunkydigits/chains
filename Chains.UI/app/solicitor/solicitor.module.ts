import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SolicitorComponent } from './solicitor.component';
import { solicitorRouting } from './solicitor.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,  
        solicitorRouting
    ], 
    declarations: [
        SolicitorComponent
    ]
})

export class SolicitorModule {}