import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PropertyListComponent } from '../components/property/property-list.component';
import { PropertyInfoComponent } from '../components/property/property-info.component';
import { PropertyAddComponent } from '../components/property/property-add.component';
import { PropertyService } from '../services/property.service';
import { RightMoveService } from '../services/rightmove.service';
import { ChainModule } from './chain.module';

@NgModule({
    imports: [
        CommonModule, 
        ChainModule, 
        FormsModule
    ], 
    exports: [
        PropertyListComponent, 
        PropertyInfoComponent,
        PropertyAddComponent
    ],
    declarations: [
        PropertyListComponent,
        PropertyInfoComponent, 
        PropertyAddComponent
    ],
    providers: [
        PropertyService, 
        RightMoveService
    ]
})

export class PropertyModule { }