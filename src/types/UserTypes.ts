
export type UserDataType = {
    id: number;
    name: string;
    statistics: UserStatsType;
    score: UserScoreType;
    macrosValue: UserMacrosType;
    sessionLength: SessionType;
    activities: ActivitiesType[];
}

export type UserType = {
    id: number;
    name: string;
}

export type UserStatsType = {
    intensity: number;
    speed: number;
    strength: number;
    endurance: number;
    energy: number;
    cardio: number;
}

export type UserScoreType = {
    score: number;
}

export type UserMacrosType = {
    calories: number;
    proteins: number;
    carbs: number;
    fats: number;
}

export type SessionType = {
    L: number;
    Ma: number;
    M: number;
    J: number;
    V: number;
    S: number;
    D: number;
}

export type ActivitiesType = {
    day: string;
    kilogram: number;
    calories: number;
}


export type FetchDataType = {
    id: number;
    name?: string; //only in mock data
    userInfos?: {
        firstName: string;
        lastName: string;
        age?: number; 
    };
    score: number;
    keyData?: {
        calorieCount: number;
        proteinCount: number;
        carbohydrateCount: number;
        lipidCount: number;
    }; // only in the API
    macros?: {
        calories: number;
        proteins: number;
        carbs: number;
        fats: number;
    }; // only in mock data
    sessions?: {
        day: string;
        kilogram?: number; 
        calories: number;
    }[]; 
    activities?: {
        day: string;
        kilogram?: number;
        calories: number;
    }[]; 
};


