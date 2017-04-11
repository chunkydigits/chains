"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
let AboutUserComponent = class AboutUserComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        // grab the current username
        let username = this.route.snapshot.params['username'];
        this.route.data.forEach((data) => this.user = data.user);
    }
    goBack() {
        this.router.navigate(['/about']);
    }
};
AboutUserComponent = __decorate([
    core_1.Component({
        template: `
        <a (click)="goBack()" class="btn btn-sm btn-info">Go Back</a>
        <div class="jumbotron text-centercol-sm-12" *ngIf="user">
            <h1>{{user.name}}  ({{user.username}})</h1>
            <img [src]="user.avatar" class="img-responsive img-circle">
        </div>
    `,
        styles: [`
        img {
            max-width:30%; 
        }
    `]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router])
], AboutUserComponent);
exports.AboutUserComponent = AboutUserComponent;
//# sourceMappingURL=about-user.component.js.map