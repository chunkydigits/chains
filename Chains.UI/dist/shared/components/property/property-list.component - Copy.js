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
var property_service_1 = require('../../services/property.service');
var PropertyListComponent = (function () {
    function PropertyListComponent(service) {
        this.service = service;
    }
    PropertyListComponent.prototype.ngOnInit = function () {
        this.properties = this.service.getPropertiesForUserId(this.userId);
    };
    PropertyListComponent.prototype.selectProperty = function (id) {
        console.log('property selected: ' + id);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PropertyListComponent.prototype, "userId", void 0);
    PropertyListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'property-list',
            templateUrl: '/app/shared/components/property/property-list.component.html',
            styleUrls: ['../../../../app/shared/components/property/property-list.component.css']
        }), 
        __metadata('design:paramtypes', [property_service_1.PropertyService])
    ], PropertyListComponent);
    return PropertyListComponent;
}());
exports.PropertyListComponent = PropertyListComponent;
//# sourceMappingURL=property-list.component - Copy.js.map