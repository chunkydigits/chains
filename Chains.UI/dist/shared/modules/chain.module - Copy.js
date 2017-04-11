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
var common_1 = require('@angular/common');
var chain_visualisation_component_1 = require('../components/chain-visualisation/chain-visualisation.component');
var chain_service_1 = require('../services/chain.service');
var ChainModule = (function () {
    function ChainModule() {
    }
    ChainModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            exports: [
                chain_visualisation_component_1.ChainVisualisationComponent
            ],
            declarations: [
                chain_visualisation_component_1.ChainVisualisationComponent
            ],
            providers: [
                chain_service_1.ChainService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ChainModule);
    return ChainModule;
}());
exports.ChainModule = ChainModule;
//# sourceMappingURL=chain.module - Copy.js.map