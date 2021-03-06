import { Component, OnChanges, Input, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChainItem } from '../../models/chain';
import { ChainService } from '../../services/chain.service';

@Component({
    moduleId: module.id,
    selector: 'chain-visualisation',
    templateUrl: './chain-visualisation.component.html', 
    styleUrls: ['./chain-visualisation.component.scss']
})

export class ChainVisualisationComponent implements OnChanges {
    @Input() propertyId: string;
    chain: ChainItem[];

    constructor(private service: ChainService) { }

    ngOnChanges(changes) {
        console.log('in onChange event');
        this.chain = this.service.getChainForProperty(this.propertyId);
    }
} 