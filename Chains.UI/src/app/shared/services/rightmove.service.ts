import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()

export class RightMoveService {

    private rightmoveBaseUrl: string = 'http://localhost:55555/api/property/';

    headers: Headers;
    options: RequestOptions;

    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'text/plain' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    getRightMoveDetails(id: string): Promise<any> {
        let url = this.http.get(this.rightmoveBaseUrl + 'rightmove-details/' + id)
            .toPromise()
            .then(this.extractStringData)
            .catch(this.handleErrorPromise);
        console.log(url);
        return url;
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

    private extractStringData(res: Response) {
        debugger;
        let body = res.json();
        return body || {};
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