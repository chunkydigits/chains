import { Component, OnInit, Input, Injectable } from '@angular/core';
import { InfoTile } from '../models/info-tile';
import { InfoTileService } from '../services/info-tile.service';

@Component({
    selector: 'info-tile',
    template: `
        <div class="col-md-4 info-tile">
            <h3>{{info.title}}</h3>
            <p>{{info.subtext}}</p>
            <button class="btn btn-lg btn-primary" routerLink={{info.link}}>{{info.linkText}}</button>
        </div>    
    `, 
    styles: [`
        .info-tile {
            background-color: #cccccc;
        }
    `]
})

export class InfoTileComponent implements OnInit {
    @Input() type: string;

    info: InfoTile = new InfoTile();

    constructor(private service: InfoTileService) { }

    ngOnInit() {
        this.info = this.service.getInfoTile(this.type);
    }
}