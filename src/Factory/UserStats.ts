import UserStatsType from "../types/UserStatsType"

class UserStats {
    private _stats: UserStatsType;

    constructor(stats: UserStatsType) {
        this._stats = stats;
    }

    get stats() {
        return this._stats;
    }
}

export default UserStats;