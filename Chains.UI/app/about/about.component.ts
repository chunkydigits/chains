import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';
import { AboutUsersResolve } from './about-resolve.service';

@Component({
    selector:'about-page', 
    template: `
        <div class="row">
        <div class="col-sm-4">
            <div *ngIf="users">
                <div class="col-sm-12 users-list">
                    <div class="profile-card"
                        *ngFor="let user of users"
                        (click)=selectUser(user)
                        [class.active]="user === activeUser">
                            {{user.name}}({{user.username}})
                    </div>
                </div>
            </div>
            <user-form (userCreated)="onUserCreated($event)"></user-form>
        </div>
        <div class="col-sm-8">
            <user-profile [user]="activeUser"></user-profile>
            <div class="jumbotron"
                 *ngIf="!activeUser">
                <span class="glyphicon glyphicon-arrow-left"></span>
                <h2>Choose a user</h2>
            </div>
        </div>
    </div>
    `, 
    styles: [`
    .profile-card {
        background: whitesmoke;
        padding: 30px;
        border-radius: 5px;
        text-align:center;
    }

    .profile-card img {
        max-width:50%;
        margin: 10px auto;
    }`]
})

export class AboutComponent implements OnInit{
    message: string = "Hello!";
    activeUser: User;
    users: User[];
    constructor(private route: ActivatedRoute) { }

    selectUser(user) {
        this.activeUser = user;
        console.log(this.activeUser);
    }

    onUserCreated(event) {
        this.users.push(event.user);
    }    

    ngOnInit() {
        //this.service.getUsers().then(users => this.users = users); // use this method when the ngInit is getting bare big

        // use this to get the users before you actually have loaded the page. 
        // i.e.as soon as you start getting the resources of the page, this is 
        // kicked off and working in the background to load it faster. 
        this.route.data.forEach((data: { users: User[] }) => this.users = data.users);
    }
}
