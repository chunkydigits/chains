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
var router_1 = require('@angular/router');
var chain_service_1 = require('../services/chain.service');
var ChainResolve = (function () {
    function ChainResolve(service, router) {
        this.service = service;
        this.router = router;
    }
    ChainResolve.prototype.resolve = function (route) {
        var _this = this;
        //let propertyId : UUID = route.params['propertyId'];
        console.log('in chain resolve');
        return this.service.getChainForProperty('1').then(function (chainItems) {
            if (chainItems) {
                return chainItems;
            }
            else {
                _this.router.navigate(['/']);
                return false;
            }
        });
    };
    ChainResolve = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [chain_service_1.ChainService, router_1.Router])
    ], ChainResolve);
    return ChainResolve;
}());
exports.ChainResolve = ChainResolve;
//# sourceMappingURL=chain.resolve.js.map