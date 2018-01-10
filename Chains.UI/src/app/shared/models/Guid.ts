export class Guid {
    private _guid: string;

    constructor(public guid: string) {
        this._guid = guid;
    }

    public ToString(): string {
        return this.guid;
    }
}