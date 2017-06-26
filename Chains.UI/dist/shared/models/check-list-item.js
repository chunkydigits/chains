"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CheckListItem {
    constructor(obj) {
        this.id = obj['Id'];
        this.displayName = obj['DisplayName'];
        this.details = obj['Details'];
        //this.reason = obj['Reason'];
        this.completed = obj['DateCompleted'];
        this.created = obj['Created'];
        this.completedUserId = obj['CompletedUserId'];
    }
}
exports.CheckListItem = CheckListItem;
//# sourceMappingURL=check-list-item.js.map