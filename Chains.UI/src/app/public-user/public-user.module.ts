import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PublicUserDashboardComponent } from './components/dashboard/dashboard.component';
import { PublicUserInformationComponent } from './components/information/information.component';
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
        PublicUserDashboardComponent,
        PublicUserInformationComponent
    ]
})

export class PublicUserModule {}