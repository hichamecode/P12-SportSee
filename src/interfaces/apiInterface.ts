

 interface apiInterface {

    get<T>(url: string, id: number | string) : Promise<T>;
    getAll<T>(url: string) : Promise<T>;
}

export default apiInterface;

// export interface User {
//     data: Data;
// }

// export interface Data {
//     id:         number;
//     userInfos:  UserInfos;
//     todayScore: number;
//     keyData:    KeyData;
// }

// export interface KeyData {
//     calorieCount:      number;
//     proteinCount:      number;
//     carbohydrateCount: number;
//     lipidCount:        number;
// }

// export interface UserInfos {
//     firstName: string;
//     lastName:  string;
//     age:       number;
// }

// session de mentorat 5-07-24

// 