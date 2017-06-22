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
const property_1 = require("../../models/property");
const property_service_1 = require("../../services/property.service");
let PropertyAddComponent = class PropertyAddComponent {
    constructor(service) {
        this.service = service;
        this.propertyCreated = new core_1.EventEmitter();
        this.propertyCreateCancelled = new core_1.EventEmitter();
        this.property = new property_1.PropertyInformation({ "Id": "NEW" });
    }
    saveProperty() {
        this.service.saveProperty(this.property);
        this.propertyCreated.emit({ property: this.property });
        this.property = new property_1.PropertyInformation({ "Id": "NEW" });
        console.log('saveProperty');
    }
    cancelAddProperty() {
        // add-property doesn't appear to be deactivated when clicking here as it is just an illusion of lots deactivation using visuals
        if (this.canDeactivate()) {
            console.log('cancelled adding a property');
            this.property = new property_1.PropertyInformation({ "Id": "NEW" });
            this.propertyCreateCancelled.emit({ cancelled: true });
            console.log('cancelled');
        }
    }
    canDeactivate() {
        console.log('in canDeactivate');
        if (this.property.displayName !== '' || this.property.rightMoveIdentifier !== '') {
            return window.confirm('Your changes will be disgarded');
        }
        return true;
    }
};
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PropertyAddComponent.prototype, "propertyCreated", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PropertyAddComponent.prototype, "propertyCreateCancelled", void 0);
PropertyAddComponent = __decorate([
    core_1.Component({
        //moduleId: module.id,
        selector: 'property-add',
        templateUrl: '/app/shared/components/property/property-add.component.html',
        styleUrls: ['../../../../app/shared/components/property/property-add.component.css']
    }),
    __metadata("design:paramtypes", [property_service_1.PropertyService])
], PropertyAddComponent);
exports.PropertyAddComponent = PropertyAddComponent;
//# sourceMappingURL=property-add.component.js.map