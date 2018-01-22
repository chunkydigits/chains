import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()

export class FeedbackService {

    private feedbackBaseUrl: string = 'http://localhost:55555/api/feedback/';

    headers: Headers;
    options: RequestOptions;

    constructor(private http: Http) {
        var bearerToken = "Bearer " + localStorage.getItem('token');
        if (localStorage.getItem('token') == null)
            this.headers = new Headers({ 'Content-Type': 'application/json' });
        else
            this.headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': bearerToken });

        this.options = new RequestOptions({ headers: this.headers });
    }

    submitFeedback(feedback: any) {
        let body = JSON.stringify(feedback);
        console.log("Body of Request:", body);
        return this.http
            .post(this.feedbackBaseUrl + "add", body, this.options)
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