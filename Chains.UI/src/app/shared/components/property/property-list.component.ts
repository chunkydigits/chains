import { Component, OnInit, Input, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyService } from '../../services/property.service';
import { Observable } from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'property-list',
    templateUrl: './property-list.component.html',
    styleUrls: ['./property-list.component.css']
})

export class PropertyListComponent implements OnInit {
    @Input() userId: string;
    properties: any[];
    activeProperty: any;
    addingProperty: boolean = false;
    editingProperty: boolean = false;
    errorMessage: string = null;
    loadingProperties: boolean = true;
    constructor(private service: PropertyService, private router: Router) { }

    ngOnInit() {
        this.getProperties();
    }

    getProperties() {
        this.errorMessage = null;
        this.service.getPropertiesForUserId(this.userId)
            .subscribe(
            properties => this.properties = properties,
            error => this.errorMessage = error
            );
        this.loadingProperties = false;
        if (this.errorMessage === null)
            console.log('Properties successfully retrieved');
        else
            console.log('Error found when retrieving properties');
    }

    selectProperty(id: string) {
        debugger;
        if (this.addingProperty) {
            console.log('You can not view a property whilst adding a new property');
            return;
        }
        this.service.getPropertyById(id).subscribe(property => this.activeProperty = property);
    }

    addProperty() {
        this.addingProperty = true;
    }

    propertySaved(event) {
        console.log('propertyNotSaved Event Fired');
        var found = this.properties.findIndex(function (el) {
            return el.Id === event.property.Id;
        });

        if(found !== -1) {
            this.properties[found] = event.property;
        } else {
            this.properties.push(event.property);
        }
        this.addingProperty = false;
    }

    propertyNotSaved(event) {
        console.log('propertyNotSaved Event Fired');
        this.addingProperty = !event.cancelled;
    }
} 