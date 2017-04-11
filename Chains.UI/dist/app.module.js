"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const app_component_1 = require("./app.component");
const contact_component_1 = require("./contact/contact.component");
const home_component_1 = require("./home/home.component");
const app_routing_1 = require("./app.routing");
const not_found_component_1 = require("./not-found/not-found.component");
const welcome_message_component_1 = require("./home/welcome-message.component");
const info_tile_component_1 = require("./shared/components/info-tile.component");
const info_tile_service_1 = require("./shared/services/info-tile.service");
const how_to_component_1 = require("./home/how-to.component");
const chain_module_1 = require("./shared/modules/chain.module");
const property_module_1 = require("./shared/modules/property.module");
const auth_guard_service_1 = require("./shared/guards/auth-guard.service");
const can_deactivate_guard_service_1 = require("./shared/guards/can-deactivate-guard.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_1.appRouting,
            chain_module_1.ChainModule,
            property_module_1.PropertyModule
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            contact_component_1.ContactComponent,
            not_found_component_1.NotFoundComponent,
            welcome_message_component_1.WelcomeMessageComponent,
            info_tile_component_1.InfoTileComponent,
            how_to_component_1.HowToComponent
        ],
        providers: [
            info_tile_service_1.InfoTileService,
            auth_guard_service_1.AuthGuard,
            can_deactivate_guard_service_1.CanDeactivateGuard
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map