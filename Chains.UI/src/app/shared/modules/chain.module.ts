import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChainVisualisationComponent } from '../components/chain-visualisation/chain-visualisation.component';
import { ChainService } from '../services/chain.service';   

@NgModule({
    imports: [
        CommonModule
    ], 
    exports: [
        ChainVisualisationComponent
    ],
    declarations: [
        ChainVisualisationComponent
    ],
    providers: [
        ChainService
    ]
})

export class ChainModule { }