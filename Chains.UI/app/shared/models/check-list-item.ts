export class CheckListItem {
    constructor(obj: Object) {
        this.id = obj['Id'];
        this.displayName = obj['DisplayName'];
        this.details = obj['Details'];
        this.completedDate = obj['Completed'];
        this.completed = this.completedDate !== null && typeof(this.completedDate) !== 'undefined';
        this.created = obj['Created'];
        this.completedUserId = obj['CompletedUserId'];
    }

    id: string;
    displayName: string;
    details: string;
    completedDate: Date;
    completed: boolean;
    created: Date;
    completedUserId: string;
}