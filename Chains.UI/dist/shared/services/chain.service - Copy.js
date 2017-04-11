"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var chainItems = [{
        id: null,
        displayName: null,
        blocker: null,
        endOfChain: null,
        startOfChain: null,
        order: 1,
        status: null,
        type: 1
    },
    {
        id: '1',
        displayName: 'A property 1',
        blocker: 'solicitor',
        endOfChain: false,
        startOfChain: true,
        order: 2,
        status: 1,
        type: 5
    },
    {
        id: '2',
        displayName: 'A property 2',
        blocker: 'public-user',
        endOfChain: false,
        startOfChain: false,
        order: 3,
        status: 3,
        type: 5
    },
    {
        id: '3',
        displayName: 'A property 3',
        blocker: 'estate-agent',
        endOfChain: true,
        startOfChain: false,
        order: 4,
        status: 2,
        type: 5
    },
    {
        id: '4',
        displayName: 'And another property',
        blocker: 'estate-agent',
        endOfChain: true,
        startOfChain: false,
        order: 5,
        status: 2,
        type: 5
    },
    {
        id: '5',
        displayName: 'Another property',
        blocker: 'estate-agent',
        endOfChain: true,
        startOfChain: false,
        order: 6,
        status: 1,
        type: 5
    },
    {
        id: '6',
        displayName: 'property 6',
        blocker: 'estate-agent',
        endOfChain: true,
        startOfChain: false,
        order: 7,
        status: 2,
        type: 5
    },
    {
        id: '7',
        displayName: 'property 7',
        blocker: 'estate-agent',
        endOfChain: true,
        startOfChain: false,
        order: 8,
        status: 1,
        type: 5
    },
    {
        id: '8',
        displayName: 'property no 8',
        blocker: 'estate-agent',
        endOfChain: true,
        startOfChain: false,
        order: 9,
        status: 1,
        type: 5
    },
    {
        id: '9',
        displayName: 'property 9',
        blocker: 'estate-agent',
        endOfChain: true,
        startOfChain: false,
        order: 10,
        status: 2,
        type: 5
    },
    {
        id: '10',
        displayName: 'propety 10',
        blocker: 'estate-agent',
        endOfChain: true,
        startOfChain: false,
        order: 11,
        status: 1,
        type: 5
    },
    {
        id: '11',
        displayName: 'property 11',
        blocker: 'estate-agent',
        endOfChain: true,
        startOfChain: false,
        order: 12,
        status: 1,
        type: 5
    },
    {
        id: '12',
        displayName: 'property 12',
        blocker: 'estate-agent',
        endOfChain: true,
        startOfChain: false,
        order: 13,
        status: 3,
        type: 5
    },
    {
        id: '13',
        displayName: 'property 13',
        blocker: 'estate-agent',
        endOfChain: true,
        startOfChain: false,
        order: 14,
        status: 1,
        type: 5
    },
    {
        id: '14',
        displayName: 'property 14',
        blocker: 'estate-agent',
        endOfChain: true,
        startOfChain: false,
        order: 15,
        status: 1,
        type: 5
    },
    {
        id: '15',
        displayName: 'prop 15',
        blocker: 'estate-agent',
        endOfChain: true,
        startOfChain: false,
        order: 16,
        status: 2,
        type: 5
    },
    {
        id: '16',
        displayName: 'prop 16',
        blocker: 'estate-agent',
        endOfChain: true,
        startOfChain: false,
        order: 17,
        status: 2,
        type: 5
    },
    {
        id: '17',
        displayName: 'prop 17',
        blocker: 'estate-agent',
        endOfChain: true,
        startOfChain: false,
        order: 18,
        status: 1,
        type: 5
    },
    {
        id: '18',
        displayName: 'prop 18',
        blocker: 'estate-agent',
        endOfChain: true,
        startOfChain: false,
        order: 19,
        status: 1,
        type: 5
    },
    {
        id: '19',
        displayName: 'prop 19',
        blocker: 'estate-agent',
        endOfChain: true,
        startOfChain: false,
        order: 20,
        status: 1,
        type: 5
    },
    {
        id: '20',
        displayName: 'prop 20',
        blocker: 'estate-agent',
        endOfChain: true,
        startOfChain: false,
        order: 21,
        status: 3,
        type: 5
    },
    {
        id: '21',
        displayName: 'prop 21',
        blocker: 'estate-agent',
        endOfChain: true,
        startOfChain: false,
        order: 22,
        status: 1,
        type: 5
    },
    {
        id: '22',
        displayName: 'prop 22',
        blocker: 'estate-agent',
        endOfChain: true,
        startOfChain: false,
        order: 23,
        status: 1,
        type: 5
    },
    {
        id: '23',
        displayName: 'prop 23',
        blocker: 'estate-agent',
        endOfChain: true,
        startOfChain: false,
        order: 24,
        status: 1,
        type: 5
    },
    {
        id: '24',
        displayName: 'prop 24',
        blocker: 'estate-agent',
        endOfChain: true,
        startOfChain: false,
        order: 25,
        status: 1,
        type: 5
    },
    {
        id: '25',
        displayName: 'prop 25',
        blocker: 'estate-agent',
        endOfChain: true,
        startOfChain: false,
        order: 26,
        status: 1,
        type: 5
    },
    {
        id: '26',
        displayName: 'prop 26',
        blocker: 'estate-agent',
        endOfChain: true,
        startOfChain: false,
        order: 27,
        status: 1,
        type: 5
    },
    {
        id: '27',
        displayName: 'prop 27',
        blocker: 'estate-agent',
        endOfChain: true,
        startOfChain: false,
        order: 28,
        status: 1,
        type: 5
    },
    {
        id: '28',
        displayName: 'prop 28',
        blocker: 'estate-agent',
        endOfChain: true,
        startOfChain: false,
        order: 29,
        status: 3,
        type: 5
    },
    {
        id: '29',
        displayName: 'prop 29',
        blocker: 'estate-agent',
        endOfChain: true,
        startOfChain: false,
        order: 30,
        status: 2,
        type: 5
    },
    {
        id: null,
        displayName: null,
        blocker: null,
        endOfChain: null,
        startOfChain: null,
        order: 31,
        status: null,
        type: 4
    }
];
var ChainService = (function () {
    function ChainService() {
    }
    ChainService.prototype.getChainForProperty = function (id) {
        return chainItems;
    };
    ChainService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ChainService);
    return ChainService;
}());
exports.ChainService = ChainService;
//# sourceMappingURL=chain.service - Copy.js.map