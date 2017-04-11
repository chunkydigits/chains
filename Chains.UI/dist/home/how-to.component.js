"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let HowToComponent = class HowToComponent {
};
HowToComponent = __decorate([
    core_1.Component({
        selector: 'how-to',
        template: `
        <div class="jumbotron">
            <h2>How it all works</h2>
            <ol>
                <li>If you are the purchaser or seller, request that the Estate Agent and Solicitor that you are using register and keeps you informed via MyHousingChain.co.uk. </li>
                <li>Estate Agent registers the property and give you a unique code that will allow you to view the progress via the website</li>
                <li>The estate agents and solicitors checks off the progress from the checklist provided (adding extra bits when they see fit)</li>
                <li>Log in any time to see the progress and status of the chain</li>
                <li>Get emails upon chain completion</li>
                <li>Get notified of any blockers immediately</li>
                <li>Complete your house sale and / or purchase in record time.</li>
            </ol>
        </div>    
    `
    })
], HowToComponent);
exports.HowToComponent = HowToComponent;
//# sourceMappingURL=how-to.component.js.map