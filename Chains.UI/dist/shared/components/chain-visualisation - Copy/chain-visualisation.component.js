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
var chain_service_1 = require('../../services/chain.service');
var ChainVisualisationComponent = (function () {
    function ChainVisualisationComponent(service) {
        this.service = service;
    }
    ChainVisualisationComponent.prototype.ngOnInit = function () {
        this.chain = this.service.getChainForProperty(this.propertyId);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChainVisualisationComponent.prototype, "propertyId", void 0);
    ChainVisualisationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chain-visualisation',
            templateUrl: '/app/shared/components/chain-visualisation/chain-visualisation.component.html',
            styleUrls: ['../../../../app/shared/components/chain-visualisation/chain-visualisation.component.css']
        }), 
        __metadata('design:paramtypes', [chain_service_1.ChainService])
    ], ChainVisualisationComponent);
    return ChainVisualisationComponent;
}());
exports.ChainVisualisationComponent = ChainVisualisationComponent;
//# sourceMappingURL=chain-visualisation.component.js.map