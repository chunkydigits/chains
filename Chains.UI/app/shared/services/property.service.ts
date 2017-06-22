import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { PropertyInformation } from '../models/property';

/*const propertyItems: PropertyInformation[] = [
{
    id: '1',
    displayName: '3 Crayford Drive, WF4 1SQ',
    blocker: 'solicitor',
    endOfChain: false,
    startOfChain: true,
    order: 2,
    status: 1,
    type: 5,
    totalPropertiesInChain: 5,
    checkListItems: null,
    rightMoveIdentifier: '123456'
},
{
    id: '2',
    displayName: '30 Hearsey Gardens, GU17 0EP',
    blocker: 'public-user',
    endOfChain: false,
    startOfChain: false,
    order: 3,
    status: 3,
    type: 5,
    totalPropertiesInChain: 5,
    checkListItems: [
        {
            id: '1',
            complete: true,
            dateCompleted: new Date('2016-12-06T00:00:00'),
            displayName: 'Agree Sale',
            reason: null
        }],
    rightMoveIdentifier: '123457'
},
{
    id: '3',
    displayName: '77 Ravenswood Crescent, HA2 9JL',
    blocker: 'estate-agent',
    endOfChain: true,
    startOfChain: false,
    order: 4,
    status: 2,
    type: 5,
    totalPropertiesInChain: 5,
    checkListItems: [
        {
            id: '1',
            complete: true,
            dateCompleted: new Date('2016-12-06T00:00:00'),
            displayName: 'Agree Sale',
            reason: null
        }, {
            id: '2',
            complete: false,
            dateCompleted: null,
            displayName: 'Exchange Contracts',
            reason: 'Waiting for buyer to return survey'
        }],
    rightMoveIdentifier: '1234578'
},
{
    id: '4',
    displayName: '70 Jubilee Drive, HA4 0PQ',
    blocker: 'estate-agent',
    endOfChain: true,
    startOfChain: false,
    order: 5,
    status: 2,
    type: 5,
    totalPropertiesInChain: 5,
    checkListItems: [
        {
            id: '1',
            complete: true,
            dateCompleted: new Date('2016-12-06T00:00:00'),
            displayName: 'Agree Sale',
            reason: null
        }, {
            id: '2',
            complete: true,
            dateCompleted: new Date('2016-12-10T00:00:00'),
            displayName: 'Exchange Contracts',
            reason: null
        }, {
            id: '3',
            complete: true,
            dateCompleted: new Date('2016-12-12T00:00:00'),
            displayName: 'Surveys',
            reason: null
        }, {
            id: '4',
            complete: false,
            dateCompleted: null,
            displayName: 'Arrange Completion Date',
            reason: 'Waiting on seller to accomodate sale'
        }],
    rightMoveIdentifier: '1234579'
},
{
    id: '5',
    displayName: '177 Malvern Avenue, HA2 8AF',
    blocker: 'estate-agent',
    endOfChain: true,
    startOfChain: false,
    order: 6,
    status: 1,
    type: 5,
    totalPropertiesInChain: 5,
    checkListItems: null,
    rightMoveIdentifier: '1234579'
},
{
    id: '6',
    displayName: 'property 6',
    blocker: 'estate-agent',
    endOfChain: true,
    startOfChain: false,
    order: 7,
    status: 2,
    type: 5,
    totalPropertiesInChain: 5,
    checkListItems: [
        {
            id: '1',
            complete: true,
            dateCompleted: new Date('2016-12-06T00:00:00'),
            displayName: 'Agree Sale',
            reason: null
        }, {
            id: '2',
            complete: true,
            dateCompleted: new Date('2016-12-10T00:00:00'),
            displayName: 'Exchange Contracts',
            reason: null
        }, {
            id: '3',
            complete: true,
            dateCompleted: new Date('2016-12-12T00:00:00'),
            displayName: 'Surveys',
            reason: null
        }, {
            id: '4',
            complete: true,
            dateCompleted: new Date('2016-12-12T00:00:00'),
            displayName: 'Arrange Completion Date',
            reason: 'Set for the 01/01/2017'
        },
        {
            id: '5',
            complete: false,
            dateCompleted: null,
            displayName: 'Complete Sale',
            reason: 'Completion date set - waiting for the date to arrive. Completeion date set for the 01/01/2017'
        }],
    rightMoveIdentifier: '1234510'
},
{
    id: '7',
    displayName: '1 Station Road, HG3 1JL',
    blocker: 'estate-agent',
    endOfChain: true,
    startOfChain: false,
    order: 8,
    status: 1,
    type: 5,
    totalPropertiesInChain: 5,
    checkListItems: [
        {
            id: '1',
            complete: true,
            dateCompleted: new Date('2016-12-06T00:00:00'),
            displayName: 'Agree Sale',
            reason: null
        }, {
            id: '2',
            complete: true,
            dateCompleted: new Date('2016-12-10T00:00:00'),
            displayName: 'Exchange Contracts',
            reason: null
        }, {
            id: '3',
            complete: true,
            dateCompleted: new Date('2016-12-12T00:00:00'),
            displayName: 'Surveys',
            reason: null
        }, {
            id: '4',
            complete: true,
            dateCompleted: new Date('2016-12-12T00:00:00'),
            displayName: 'Arrange Completion Date',
            reason: 'Set for the 01/01/2017'
        },
        {
            id: '5',
            complete: true,
            dateCompleted: new Date('2017-01-01T00:00:00'),
            displayName: 'Complete Sale',
            reason: null
        }],
    rightMoveIdentifier: '1234511'
},
{
    id: '8',
    displayName: '386b Eastcote Lane, HA2 9AJ',
    blocker: 'estate-agent',
    endOfChain: true,
    startOfChain: false,
    order: 9,
    status: 1,
    type: 5,
    totalPropertiesInChain: 5,
    checkListItems: [
        {
            id: '1',
            complete: true,
            dateCompleted: new Date('2016-12-06T00:00:00'),
            displayName: 'Agree Sale',
            reason: null
        }, {
            id: '2',
            complete: true,
            dateCompleted: new Date('2016-12-10T00:00:00'),
            displayName: 'Exchange Contracts',
            reason: null
        }, {
            id: '3',
            complete: true,
            dateCompleted: new Date('2016-12-12T00:00:00'),
            displayName: 'Surveys',
            reason: null
        }, {
            id: '4',
            complete: false,
            dateCompleted: null,
            displayName: 'Arrange Completion Date',
            reason: 'Asked for the 25/12/2016 - awaiting seller confirmation'
        }],
    rightMoveIdentifier: '1234512'
},
{
    id: '9',
    displayName: '7 Webb Close, GU19 5QP',
    blocker: 'estate-agent',
    endOfChain: true,
    startOfChain: false,
    order: 10,
    status: 2,
    type: 5,
    totalPropertiesInChain: 5,
    checkListItems: [
        {
            id: '1',
            complete: true,
            dateCompleted: new Date('2016-12-06T00:00:00'),
            displayName: 'Agree Sale',
            reason: null
        }, {
            id: '2',
            complete: false,
            dateCompleted: null,
            displayName: 'Exchange Contracts',
            reason: 'Not had the chance yet.'
        }],
    rightMoveIdentifier: '1234513'
}
];*/  

@Injectable()

export class PropertyService {

    private propertyBaseUrl: string = 'http://localhost:55555/api/Property/';

    constructor(private http: Http) {}

    //getPropertiesForUserId(id: string): PropertyInformation[] {
    getPropertiesForUserId(id: string): Observable<PropertyInformation[]> {
        let properties = this.http
            .get(this.propertyBaseUrl + 'GetProperties?searcherId=null')
            .map(this.mapDtoToPropertyInformationListViewModel);
        console.log(properties);
        return properties; 
      //  return propertyItems;
    }

    private mapDtoToPropertyInformationListViewModel(res: Response) {
        console.log(res.json());
        return PropertyInformation.fromJSONArray(res.json()) || [];
    }
    
    getPropertyById(id: string): Observable<PropertyInformation> {
        return this.getPropertiesForUserId(null)
            .map(properties => properties.find(property => property.id === id));
    }

    private handleError(error: Response | any) {
        let errorMessage: string;

        errorMessage = error.message ? error.message : error.toString();

        console.log('ERROR MESSAGE: ' + errorMessage);
        // In real world application, call to log error to remote server
        // logError(error);

        // This returns another Observable for the observer to subscribe to
        return Observable.throw(errorMessage);
    }

    saveProperty(property: PropertyInformation) {
        console.log(property.id + ' saved');
        console.log(property.displayName + ' as address');
        //this.http.post()
    }

    getNewProperty(): PropertyInformation {
        return new PropertyInformation(null);
    }
}