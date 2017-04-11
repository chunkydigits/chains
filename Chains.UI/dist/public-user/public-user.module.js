"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const common_1 = require("@angular/common");
const public_user_component_1 = require("./public-user.component");
const public_user_routing_1 = require("./public-user.routing");
const chain_module_1 = require("../shared/modules/chain.module");
let PublicUserModule = class PublicUserModule {
};
PublicUserModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            public_user_routing_1.publicUserRouting,
            chain_module_1.ChainModule
        ],
        declarations: [
            public_user_component_1.PublicUserComponent
        ]
    })
], PublicUserModule);
exports.PublicUserModule = PublicUserModule;
//# sourceMappingURL=public-user.module.js.map