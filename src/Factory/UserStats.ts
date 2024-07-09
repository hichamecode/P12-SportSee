

type StatsType = {
    intensity: number;
    speed: number;
    strength: number;
    endurance: number;
    energy: number;
    cardio: number;
}

export default class UserStats {
     _stats: StatsType;

    constructor(stats: StatsType) {
        this._stats = stats;
    }

    get stats() {
        return this._stats;
    }
}
