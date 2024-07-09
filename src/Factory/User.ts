
type UserType = {
    id: number;
    name: string;
}

export default class User {

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
