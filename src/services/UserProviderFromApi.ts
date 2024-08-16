import UserProviderInterface from "../interfaces/UserProviderInterface";
import axios from "axios";
import { ActivitiesType, SessionType, UserMacrosType, UserScoreType, UserStatsType, UserType, FetchDataType, UserDataType } from "../types/UserTypes";

class UserProviderFromApi implements UserProviderInterface {

    private async fetchUserData(userId: string): Promise<FetchDataType> {
        try {
            const response = await axios.get(`http://localhost:3000/user/${userId}/`);
            return response.data.data;
        } catch (error) {
            throw 'Error while fetching user data';
        }
    }

    private async fetchUserActivities(userId: string): Promise<ActivitiesType> {
        try {
            const response = await axios.get(`http://localhost:3000/user/${userId}/activity`);
            return response.data.data.sessions.map((session: any, index: number) => ({
                id: index + 1,
                weight: session.kilogram,
                caloriesBurnt: session.calories
            }));
        } catch (error) {
            throw 'Error while fetching user activities';
        }
    }

    private async fetchUserPerformance(userId: string): Promise<UserStatsType> {
        try {
            const response = await axios.get(`http://localhost:3000/user/${userId}/performance`);
            const kindData = response.data.data.kind;
            const stats = response.data.data.data;

            return stats.reduce((acc: any, stat: any) => {
                const statKey = kindData[stat.kind];
                acc[statKey] = stat.value;
                return acc;
            }, {});
        } catch (error) {
            throw 'Error while fetching user performance';
        }
    }

    private async fetchUserAverageSessions(userId: string): Promise<SessionType[]> {
        try {
            const response = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
            return response.data.data.sessions;
        } catch (error) {
            throw 'Error while fetching user average sessions';
        }
    }

    async getUser(userId: string): Promise<UserType> {

        const userData = await this.fetchUserData(userId)
        return {
            id: userData.id,
            name: userData.userInfos.firstName
        }
    }


    async getUserStats(userId: string): Promise<UserStatsType> {
        const stats = await this.fetchUserPerformance(userId);
        return {
            intensity: stats.intensity,
            speed: stats.speed,
            strength: stats.strength,
            endurance: stats.endurance,
            energy: stats.energy,
            cardio: stats.cardio
        };
    }

    async getUserScore(userId: string): Promise<UserScoreType> {
        const userData = await this.fetchUserData(userId);
        return userData.score;
    }

    async getUserMacros(userId: string): Promise<UserMacrosType> {
        const userData = await this.fetchUserData(userId);

        return {
            calories: userData.keyData.calorieCount,
            proteins: userData.keyData.proteinCount,
            carbs: userData.keyData.carbohydrateCount,
            fats: userData.keyData.lipidCount
        };
    }

    async getSession(userId: string): Promise<SessionType[]> {
        return await this.fetchUserAverageSessions(userId);
    }

    async getActivities(userId: string): Promise<ActivitiesType> {
        return await this.fetchUserActivities(userId);
    }
}

export default UserProviderFromApi;


