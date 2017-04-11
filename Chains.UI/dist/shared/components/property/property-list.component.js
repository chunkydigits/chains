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
const router_1 = require("@angular/router");
const property_service_1 = require("../../services/property.service");
let PropertyListComponent = class PropertyListComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.addingProperty = false;
    }
    ngOnInit() {
        this.properties = this.service.getPropertiesForUserId(this.userId);
    }
    selectProperty(id) {
        if (this.addingProperty) {
            console.log('You can not view a property whilst adding a new property');
            return;
        }
        this.activeProperty = this.getPropertyInformation(id);
    }
    getPropertyInformation(id) {
        return this.service.getPropertyById(id);
    }
    addProperty() {
        this.addingProperty = true;
    }
    newPropertyCreated(event) {
        console.log('newPropertyCreated Event Fired');
        this.properties.push(event.property);
        this.addingProperty = false;
    }
    newPropertyCreateCancelled(event) {
        console.log('newPropertyCreateCancelled Event Fired');
        console.log(event.cancelled);
        this.addingProperty = !event.cancelled;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PropertyListComponent.prototype, "userId", void 0);
PropertyListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'property-list',
        templateUrl: '/app/shared/components/property/property-list.component.html',
        styleUrls: ['../../../../app/shared/components/property/property-list.component.css']
    }),
    __metadata("design:paramtypes", [property_service_1.PropertyService, router_1.Router])
], PropertyListComponent);
exports.PropertyListComponent = PropertyListComponent;
//# sourceMappingURL=property-list.component.js.map