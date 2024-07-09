
type Macros = {
    calories: number;
    proteins: number;
    carbs: number;
    fats: number;
}

export default class UserMacros {

  private _macrosValue: Macros;

    constructor(macrosValue: Macros) {
        this._macrosValue = macrosValue
    }

    get macrosValue() {
        return this._macrosValue;
    }
}

