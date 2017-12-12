"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CheckListItem {
    constructor(obj) {
        this.id = obj['Id'];
        this.displayName = obj['DisplayName'];
        this.details = obj['Details'];
        this.completedDate = obj['Completed'];
        this.completed = this.completedDate !== null && typeof (this.completedDate) !== 'undefined';
        this.created = obj['Created'];
        this.completedUserId = obj['CompletedUserId'];
    }
}
exports.CheckListItem = CheckListItem;
//# sourceMappingURL=check-list-item.js.map