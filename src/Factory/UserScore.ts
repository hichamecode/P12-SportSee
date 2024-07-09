

export default class UserScore {
    private _score: number;
    
    constructor(score: number) {
        this._score = score;
    }

    get score() {
        return this._score
    }
}

