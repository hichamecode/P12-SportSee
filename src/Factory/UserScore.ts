import UserScoreType from "../types/UserScoreType";
class UserScore {
    private _score: UserScoreType;
    
    constructor(score: UserScoreType) {
        
        this._score = score;
    }

    get score() {
        return this._score
    }
}

export default UserScore;