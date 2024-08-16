

import { ActivitiesType, SessionType, UserMacrosType, UserScoreType, UserStatsType, UserType } from "../types/UserTypes";

interface UserProviderInterface {

    getUser(userId: string): Promise<UserType>;

    getUserStats(userId: string) : Promise<UserStatsType>

    getUserScore(userId: string): Promise<UserScoreType>;

    getUserMacros(userId: string): Promise<UserMacrosType>;

    getSession(userId: string): Promise<SessionType>;

    getActivities(userId: string): Promise<ActivitiesType>;
}

export default UserProviderInterface;

