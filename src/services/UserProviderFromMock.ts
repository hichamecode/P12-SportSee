

import UserProviderInterface from "../interfaces/UserProviderInterface";
import axios from "axios";
import { mockUrl } from "../main";
import { ActivitiesType, SessionType, UserMacrosType, UserScoreType, UserStatsType, UserType, FetchDataType, UserDataType } from "../types/UserTypes";


class UserProviderFromMock implements UserProviderInterface {

    private async fetchData(): Promise<FetchDataType> {
        try {
            const response = await axios.get(mockUrl);  
            return response.data;
        } catch (error) {
            throw 'error while fetching data';
        }
    }

    private async findUserById(userId: string): Promise<UserDataType> {
        const data = await this.fetchData();
        const user =   data.users.find((user: UserDataType) => user.id === parseInt(userId));

        if (!user) {
            throw 'user not found';
        }
        return user;
    }

    async getUser(userId: string): Promise<UserType> {
        const user = await this.findUserById(userId);
        return {
            id: user.id,
            name: user.name
        };
    }

    async getUserStats(userId: string): Promise<UserStatsType> {
        const user = await this.findUserById(userId);
        return user.statistics;
    }

    async getUserScore(userId: string): Promise<UserScoreType> {
        const user = await this.findUserById(userId);
        return user.score;
    }

    async getUserMacros(userId: string): Promise<UserMacrosType> {
        const user = await this.findUserById(userId);
        return user.macrosValue;
    }

    async getSession(userId: string): Promise<SessionType> {
        const user = await this.findUserById(userId);
        return user.sessionLength;
    }
    

    async getActivities(userId: string): Promise<ActivitiesType> {
        const user = await this.findUserById(userId);
        const activities = user.activities;

        return activities

        }

    }


export default UserProviderFromMock;