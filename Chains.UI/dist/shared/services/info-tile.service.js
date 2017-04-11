"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const info_tile_1 = require("../models/info-tile");
const infoTiles = [{ title: 'Buyer / Seller', subtext: 'The only place to have full visibility of your housing chain.', link: 'public-user', linkText: 'Get Started' },
    { title: 'Estate Agent', subtext: 'Show your client you are pushing their sale / purchase through to the best of your abilty.', link: 'estate-agent', linkText: 'Get Started' },
    { title: 'Solicitor', subtext: 'Keep your clients up to date about how efficient you are being with their sale / purchase.', link: 'solicitor', linkText: 'Get Started' }];
let InfoTileService = class InfoTileService {
    getInfoTile(type) {
        console.log('in service');
        switch (type) {
            case 'public-user':
                this.populateTileInfo('Buyer / Seller', 'The only place to have full visibility of your housing chain.', type, 'Get Started');
                break;
            case 'estate-agent':
                this.populateTileInfo('Estate Agent', 'Show your client you are pushing their sale / purchase through to the best of your abilty.', type, 'Get Started');
                break;
            case 'solicitor':
                this.populateTileInfo('Solicitor', 'Keep your clients up to date about how efficient you are being with their sale / purchase.', type, 'Get Started');
                break;
        }
        ;
        console.log(this.infoTile);
        return this.infoTile;
    }
    populateTileInfo(title, subtext, link, buttonText) {
        this.infoTile = new info_tile_1.InfoTile();
        this.infoTile.title = title;
        this.infoTile.subtext = subtext;
        this.infoTile.link = link;
        this.infoTile.linkText = buttonText;
    }
};
InfoTileService = __decorate([
    core_1.Injectable()
], InfoTileService);
exports.InfoTileService = InfoTileService;
//# sourceMappingURL=info-tile.service.js.map