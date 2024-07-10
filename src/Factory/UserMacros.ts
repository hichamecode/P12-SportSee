import UserMacrosType from "../types/UserMacrosType";

 class UserMacros {

  private _macrosValue: UserMacrosType;

    constructor(macrosValue: UserMacrosType) {
        this._macrosValue = macrosValue
    }

    get macrosValue() {
        return this._macrosValue;
    }
}

export default UserMacros;