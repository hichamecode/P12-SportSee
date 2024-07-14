import UserType from "../types/UserType";
 class User {

  private userValue: UserType;

    constructor(userValue: UserType) {
        this.userValue = userValue;
    }

    get id() {
        return this.userValue.id;
    }

    get name() {
        return this.userValue.name;
    }
}

export default User;


// interface UserFromApiInterface {
//     getId(): number;
//     getName(): string;
//     getScore(): number;
//     getKeyData(): {
//         calorieCount: number;
//         proteinCount: number;
//         carbohydrateCount: number;
//         lipidCount: number;
//       };    
// }

