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
const about_component_1 = require("./about.component");
const about_user_component_1 = require("./about-user.component");
const userprofile_component_1 = require("../users/userprofile.component");
const userform_component_1 = require("../users/userform.component");
const about_section_component_1 = require("./about-section.component");
const user_service_1 = require("../shared/services/user.service");
const about_routing_1 = require("./about.routing");
const about_resolve_service_1 = require("./about-resolve.service");
const about_user_resolve_service_1 = require("./about-user-resolve.service");
let AboutModule = class AboutModule {
};
AboutModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            about_routing_1.aboutRouting
        ],
        declarations: [
            about_component_1.AboutComponent,
            about_user_component_1.AboutUserComponent,
            userprofile_component_1.UserProfileComponent,
            userform_component_1.UserFormComponent,
            about_section_component_1.AboutSectionComponent
        ],
        providers: [
            user_service_1.UserService,
            about_resolve_service_1.AboutUsersResolve,
            about_user_resolve_service_1.AboutUserResolve
        ]
    })
], AboutModule);
exports.AboutModule = AboutModule;
//# sourceMappingURL=about.module.js.map