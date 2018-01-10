import { Component, Input } from '@angular/core';
import { User } from '../shared/models/user';


@Component({
    selector: 'user-profile',
    template: `
        <div class="jumbotron" *ngIf="user">
            <img [src]="user.avatar" class="img-circle img-responsive">
            <h2>{{user.name}} <small>{{user.username}}</small></h2>
            <input class="form-control" [(ngModel)]="user.name">
            <a [routerLink]="['/about', user.username]">link</a>
        </div>
    `
})

export class UserProfileComponent {
    @Input() user: User;
}