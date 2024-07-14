import UserMacrosType from "../types/UserMacrosType";

 class UserMacros {

    private _calories: number;
    private _proteins: number;
    private _carbs: number;
    private _fats: number;

    constructor({ calories, proteins, carbs, fats }: UserMacrosType) {
        this._calories = calories;
        this._proteins = proteins;
        this._carbs = carbs;
        this._fats = fats;
    }

    get calories() {
        return this._calories
    }

    get proteins() {
        return this._proteins
    }

    get carbs() {
        return this._carbs
    }

    get fats() {
        return this._fats
    }

}

export default UserMacros;

