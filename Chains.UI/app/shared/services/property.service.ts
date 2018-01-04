import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { PropertyInformation } from '../models/property';

@Injectable()

export class PropertyService {

    private propertyBaseUrl: string = 'http://localhost:55555/api/property/';

    constructor(private http: Http) { }

    getPropertiesForUserId(id: string): Observable<PropertyInformation[]> {
        let properties = this.http.get(this.propertyBaseUrl + 'property-list?searcherId=null')
            .map(this.mapDtoToPropertyInformationListViewModel);
        console.log(properties);
        return properties;
    }
    
    getPropertyById(id: string): Observable<PropertyInformation> {
        return this.getPropertiesForUserId(null)
            .map(properties => properties.find(property => property.id === id));
    }

    saveProperty(property: PropertyInformation) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        console.log('In the saveProperty method within the PropertyService');
        // return this.http
        //     .post(this.propertyBaseUrl + 'create', property)
        //     .map(this.extractData)
        //     .catch(this.handleErrorObservable);
    }

    getNewProperty(): PropertyInformation {
        return new PropertyInformation(null);
    }

    private mapDtoToPropertyInformationListViewModel(res: Response) {
        console.log(res.json());
        return PropertyInformation.fromJSONArray(res.json()) || [];
    }

    private extractData(res: Response) {
        debugger;
        let body = res.json();
        return body.data || {};
    }

    private handleErrorObservable(error: Response | any) {
        debugger;
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }

    private handleErrorPromise(error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }
}