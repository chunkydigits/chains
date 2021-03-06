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
        var bearerToken = "Bearer " + localStorage.getItem('token');
        this.headers = new Headers({ 'Content-Type': 'application/json', 'Authorization' : bearerToken  });
        this.options = new RequestOptions({ headers: this.headers });
    }

    getPropertiesForUserId(id: string): Observable<any[]> {
        let properties = this.http.get(this.propertyBaseUrl + 'property-list?searcherId=null', this.options)
            .map(this.mapDtoToPropertyInformationListViewModel);
        console.log(properties);
        return properties;
    }
    
    getPropertyById(id: string): Observable<any> {
        return this.getPropertiesForUserId(null)
            .map(properties => properties.find(property => property.Id === id));
    }

    saveProperty(property: any) {
        let body = JSON.stringify(property); 
        console.log("Body of Request:", body);
        return this.http
            .post(this.propertyBaseUrl + 'upsert', body, this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleErrorObservable);
    }

    getNewProperty() {
        return {"Id": "NEW"};
    }

    deleteProperty(id){
        var username = JSON.parse(localStorage.getItem('profile')).nickname;
        var url = this.propertyBaseUrl + 'delete/' + id + '/' + username;
        debugger;
        return this.http
            .get(url, this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleErrorObservable);
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