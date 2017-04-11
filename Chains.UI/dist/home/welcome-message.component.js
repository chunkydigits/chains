"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let WelcomeMessageComponent = class WelcomeMessageComponent {
};
WelcomeMessageComponent = __decorate([
    core_1.Component({
        selector: 'welcome-message',
        template: `
        <div class="jumbotron">
            <h2>Welcome to My Housing Chain</h2>
            <h3>The best way to ensure a fast and easy house purchase / sale.</h3>
        </div>    
    `
    })
], WelcomeMessageComponent);
exports.WelcomeMessageComponent = WelcomeMessageComponent;
//# sourceMappingURL=welcome-message.component.js.map