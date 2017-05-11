import { Component, OnInit, Input, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyInformation } from '../../models/property';
import { PropertyService } from '../../services/property.service';
import { Observable } from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'property-list',
    templateUrl: '/app/shared/components/property/property-list.component.html', 
    styleUrls: ['../../../../app/shared/components/property/property-list.component.css']
})

export class PropertyListComponent implements OnInit {
    @Input() userId: string;
    properties: PropertyInformation[]; 
    activeProperty: PropertyInformation;    
    addingProperty: boolean = false;
    errorMessage: string;

    constructor(private service: PropertyService, private router: Router) { }

    ngOnInit() {
        this.getProperties();
    }

    getProperties() {
        this.service.getPropertiesForUserId(this.userId)
            .subscribe(
                properties => this.properties = properties,
                error => this.errorMessage = error
            );
        console.log('here are the properties');
        console.log(this.properties[0].displayName);
    }

    selectProperty(id: string) {
        if (this.addingProperty) {
            console.log('You can not view a property whilst adding a new property');
            return;
        }
        this.activeProperty = this.getPropertyInformation(id);
    }

    getPropertyInformation(id: string): PropertyInformation {
        return this.service.getPropertyById(id);
    }

    addProperty() {
        this.addingProperty = true;
    }

    newPropertyCreated(event) {
        console.log('newPropertyCreated Event Fired');
        this.properties.push(event.property);
        this.addingProperty = false;
    }

    newPropertyCreateCancelled(event) {
        console.log('newPropertyCreateCancelled Event Fired');
        console.log(event.cancelled);
        this.addingProperty = !event.cancelled;
    }    
} 