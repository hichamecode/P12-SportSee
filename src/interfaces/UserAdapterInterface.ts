

import { UserType, UserStatsType, UserScoreType, UserMacrosType, SessionType, ActivitiesType } from '../types/UserTypes';


interface UserAdapterInterface {

    getUser(userId: string): Promise<UserType>;

    getUserStats(userId: string): Promise<UserStatsType>;

    getUserScore(userId: string): Promise<UserScoreType>;

    getUserMacros(userId: string): Promise<UserMacrosType>;

    getUserSessions(userId: string): Promise<SessionType>;
    
    getUserActivities(userId: string): Promise<ActivitiesType[]>;
}

export default UserAdapterInterface;