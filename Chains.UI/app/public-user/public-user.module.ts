import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PublicUserComponent } from './public-user.component';
import { publicUserRouting } from './public-user.routing';
import { ChainModule } from '../shared/modules/chain.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,  
        publicUserRouting, 
        ChainModule
    ], 
    declarations: [
        PublicUserComponent
    ]
})

export class PublicUserModule {}