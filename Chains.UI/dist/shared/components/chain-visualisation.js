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
var ChainVisualisationComponent = (function () {
    function ChainVisualisationComponent(service) {
        this.service = service;
    }
    ChainVisualisationComponent.prototype.ngOnInit = function () {
        this.chain = this.service.getChainForProperty(this.propertyId);
    };
    ChainVisualisationComponent = __decorate([
        core_1.Component({
            selector: 'chain-visualisation',
            template: "\n        <div class=\"col-md-12 chain\">\n            chain goes here\n        </div>    \n    ",
            styles: ["\n        .chain {\n            background-color: #cccccc;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [Object])
    ], ChainVisualisationComponent);
    return ChainVisualisationComponent;
}());
exports.ChainVisualisationComponent = ChainVisualisationComponent;
//# sourceMappingURL=chain-visualisation.js.map