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
let PropertyService = class PropertyService {
    constructor(http) {
        this.http = http;
        this.propertyBaseUrl = 'http://localhost:55555/api/property/';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
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
        let body = JSON.stringify(property);
        debugger;
        console.log("Body of Request:", body);
        return this.http
            .post(this.propertyBaseUrl + 'create', body, this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleErrorObservable);
    }
    getNewProperty() {
        return { "Id": "NEW" };
    }
    mapDtoToPropertyInformationListViewModel(res) {
        console.log(res.json());
        return res.json() || [];
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