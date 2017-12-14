import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { aboutRouting } from './about.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,  
        aboutRouting
    ], 
    declarations: [
        AboutComponent
    ]
})

export class AboutModule {}