import { Component, OnInit, Input, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyService } from '../../services/property.service';
import { Observable } from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'property-list',
    templateUrl: './property-list.component.html',
    styleUrls: ['./property-list.component.scss']
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
            (properties) => {
                this.properties = properties
                debugger;
                console.log('Properties successfully retrieved');
                this.loadingProperties = false;
            },
            error => {
                this.errorMessage = error
                console.log('Error found when retrieving properties', error);
                this.loadingProperties = false;
            }
            );
    }

    selectProperty(id: string) {
        if (this.addingProperty) {
            console.log('You can not view a property whilst adding a new property');
            return;
        }
        this.service.getPropertyById(id).subscribe(property => this.activeProperty = property);
    }

    addProperty() {
        this.activeProperty = { "Id": "NEW" };
        this.editingProperty = false;
        this.addingProperty = true;
    }

    editProperty(ev) {
        this.addingProperty = false;
        this.editingProperty = true;
        this.activeProperty = ev.property;
    }

    propertySaved(event) {
        console.log('propertyNotSaved Event Fired');
        this.getProperties();
        this.addingProperty = false;
    }

    propertyNotSaved(event) {
        console.log('propertyNotSaved Event Fired');
        this.addingProperty = false;
        this.editingProperty = false;
    }

    propertyDeleted(event) {
        console.log('propertyNotSaved Event Fired');
        this.getProperties();
        this.addingProperty = false;
        this.editingProperty = false;
        this.activeProperty = null;
    }
} 