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
const http_1 = require("@angular/http");
const Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
const property_1 = require("../models/property");
let PropertyService = class PropertyService {
    constructor(http) {
        this.http = http;
        this.propertyBaseUrl = 'http://localhost:55555/api/property/';
    }
    getPropertiesForUserId(id) {
        let properties = this.http.get(this.propertyBaseUrl + 'property-list?searcherId=null')
            .map(this.mapDtoToPropertyInformationListViewModel);
        console.log(properties);
        return properties;
    }
    getPropertyById(id) {
        return this.getPropertiesForUserId(null)
            .map(properties => properties.find(property => property.id === id));
    }
    saveProperty(property) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        console.log('In the saveProperty method within the PropertyService');
        // return this.http
        //     .post(this.propertyBaseUrl + 'create', property)
        //     .map(this.extractData)
        //     .catch(this.handleErrorObservable);
    }
    getNewProperty() {
        return new property_1.PropertyInformation(null);
    }
    mapDtoToPropertyInformationListViewModel(res) {
        console.log(res.json());
        return property_1.PropertyInformation.fromJSONArray(res.json()) || [];
    }
    extractData(res) {
        debugger;
        let body = res.json();
        return body.data || {};
    }
    handleErrorObservable(error) {
        debugger;
        console.error(error.message || error);
        return Rx_1.Observable.throw(error.message || error);
    }
    handleErrorPromise(error) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }
};
PropertyService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PropertyService);
exports.PropertyService = PropertyService;
//# sourceMappingURL=property.service.js.map