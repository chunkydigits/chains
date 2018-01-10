import { Injectable } from '@angular/core';
import { InfoTile } from '../models/info-tile';

const infoTiles: InfoTile[] = [{ title: 'Buyer / Seller', subtext: 'The only place to have full visibility of your housing chain.', link: 'public-user', linkText: 'Get Started' },
{ title: 'Estate Agent', subtext: 'Show your client you are pushing their sale / purchase through to the best of your abilty.', link: 'estate-agent', linkText: 'Get Started' },
{ title: 'Solicitor', subtext: 'Keep your clients up to date about how efficient you are being with their sale / purchase.', link: 'solicitor', linkText: 'Get Started' }];

@Injectable()

export class InfoTileService {
    infoTile: InfoTile;

    getInfoTile(type: string): InfoTile {
        console.log('in service');
        switch (type) {
            case 'public-user': this.populateTileInfo('Buyer / Seller', 'The only place to have full visibility of your housing chain.', type, 'Get Started');
                break;
            case 'estate-agent': this.populateTileInfo('Estate Agent', 'Show your client you are pushing their sale / purchase through to the best of your abilty.', type, 'Get Started');
                break;
            case 'solicitor': this.populateTileInfo('Solicitor', 'Keep your clients up to date about how efficient you are being with their sale / purchase.', type, 'Get Started');
                break;
        };

        console.log(this.infoTile);
        return this.infoTile;
    }

    populateTileInfo(title: string, subtext: string, link: string, buttonText: string) {
        this.infoTile = new InfoTile();
        this.infoTile.title = title;
        this.infoTile.subtext = subtext;
        this.infoTile.link = link;
        this.infoTile.linkText = buttonText;
    }
}
