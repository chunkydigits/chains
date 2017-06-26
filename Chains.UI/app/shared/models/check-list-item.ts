export class CheckListItem {
    constructor(obj: Object) {
        this.id = obj['Id'];
        this.displayName = obj['DisplayName'];
        this.details = obj['Details'];
        //this.reason = obj['Reason'];
        this.completed = obj['DateCompleted'];
        this.created = obj['Created'];
        this.completedUserId = obj['CompletedUserId'];
    }

    id: string;
    displayName: string;
    details: string;
    //reason: string;
    completed: Date;
    created: Date;
    completedUserId: string;    
}