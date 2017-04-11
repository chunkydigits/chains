import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutUserComponent } from './about-user.component';
import { UserProfileComponent } from '../users/userprofile.component';
import { UserFormComponent } from '../users/userform.component';
import { AboutSectionComponent } from './about-section.component';
import { UserService } from '../shared/services/user.service';
import { aboutRouting } from './about.routing';
import { AboutUsersResolve } from './about-resolve.service';
import { AboutUserResolve } from './about-user-resolve.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,  
        aboutRouting
    ], 
    declarations: [
        AboutComponent, 
        AboutUserComponent,
        UserProfileComponent,
        UserFormComponent, 
        AboutSectionComponent
    ], 
    providers: [
        UserService, 
        AboutUsersResolve,
        AboutUserResolve
    ]
})

export class AboutModule {}