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
const property_list_component_1 = require("../components/property/property-list.component");
const property_info_component_1 = require("../components/property/property-info.component");
const property_add_component_1 = require("../components/property/property-add.component");
const property_service_1 = require("../services/property.service");
const chain_module_1 = require("./chain.module");
let PropertyModule = class PropertyModule {
};
PropertyModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            chain_module_1.ChainModule,
            forms_1.FormsModule
        ],
        exports: [
            property_list_component_1.PropertyListComponent,
            property_info_component_1.PropertyInfoComponent,
            property_add_component_1.PropertyAddComponent
        ],
        declarations: [
            property_list_component_1.PropertyListComponent,
            property_info_component_1.PropertyInfoComponent,
            property_add_component_1.PropertyAddComponent
        ],
        providers: [
            property_service_1.PropertyService
        ]
    })
], PropertyModule);
exports.PropertyModule = PropertyModule;
//# sourceMappingURL=property.module.js.map