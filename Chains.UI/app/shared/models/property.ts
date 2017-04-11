import { CheckListItem } from './check-list-item';    

export class PropertyInformation {
    id: string;
    displayName: string; // will be a number 
    blocker: string; // will be either estate-agent, solicitor, public-user(buyer) or public-user(seller)
    endOfChain: boolean;
    startOfChain: boolean;
    order: number;
    status: number; // could use some sort of enum here. 
    type: number; // 1 - start ready, 2 - start not ready, 3 - end ready, 4 - end not ready, 5 - property node
    totalPropertiesInChain: number;
    rightMoveIdentifier: string;
    checkListItems: CheckListItem[];
}