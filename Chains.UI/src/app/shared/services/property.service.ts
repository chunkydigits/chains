import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()

export class PropertyService {

    private propertyBaseUrl: string = 'http://localhost:55555/api/property/';

    headers: Headers;
    options: RequestOptions;

    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'text/plain' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    getPropertiesForUserId(id: string): Observable<any[]> {
        let properties = this.http.get(this.propertyBaseUrl + 'property-list?searcherId=null')
            .map(this.mapDtoToPropertyInformationListViewModel);
        console.log(properties);
        return properties;
    }
    
    getPropertyById(id: string): Observable<any> {
        return this.getPropertiesForUserId(null)
            .map(properties => properties.find(property => property.id === id));
    }

    saveProperty(property: any) {
        let body = JSON.stringify({"Id":null,"DisplayName":"kjdhfksjfhksjdfh","RightMoveIdentifier":"23203984209384","StartOfChain":true,"EndOfChain":true,
        "AddressLine1":"laksjdlaksjd",
        "AddressLine2":"ldkfg", 
        "AddressLine3":"pldfkjdfmn", 
        "AddressLine4":"nnnvnv", 
        "AddressLine5":"kkkkd", 
        "Postcode":"WF4 1SS", 
        "SellerCodeId":null, 
        "BuyerCodeId":null, 
        "DateAdded":"2018-01-05 18:11:21.123",
        "PropertyCheckListItemViewModel": []}); 
        debugger;
        console.log("Body of Request:", body);
        return this.http
            .post(this.propertyBaseUrl + 'create', body, this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleErrorObservable);
    }

    getNewProperty() {
        return {"Id": "NEW"};
    }

    private mapDtoToPropertyInformationListViewModel(res: Response) {
        console.log(res.json());
        return res.json() || [];
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