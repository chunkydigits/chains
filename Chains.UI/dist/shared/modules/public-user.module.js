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
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var public_user_component_1 = require('./public-user.component');
var public_user_routing_1 = require('./public-user.routing');
var chain_visualisation_component_1 = require('../shared/components/chain-visualisation.component');
var PublicUserModule = (function () {
    function PublicUserModule() {
    }
    PublicUserModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                public_user_routing_1.publicUserRouting,
            ],
            declarations: [
                public_user_component_1.PublicUserComponent,
                chain_visualisation_component_1.ChainVisualisationComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PublicUserModule);
    return PublicUserModule;
}());
exports.PublicUserModule = PublicUserModule;
//# sourceMappingURL=public-user.module.js.map