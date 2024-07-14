import UserScoreType from "../types/UserScoreType";
class UserScore {
    private _score: UserScoreType;
    
    constructor(UserScore: UserScoreType) {
        
        this._score = UserScore.score;
    }

    get score() {
        return this._score
    }
}

export default UserScore;