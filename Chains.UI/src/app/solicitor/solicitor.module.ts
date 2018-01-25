import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SolicitorDashboardComponent } from './components/dashboard/dashboard.component';
import { solicitorRouting } from './solicitor.routing';
import { SolicitorInformationComponent } from './components/information/information.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,  
        solicitorRouting
    ], 
    declarations: [
        SolicitorDashboardComponent,
        SolicitorInformationComponent
    ]
})

export class SolicitorModule {}