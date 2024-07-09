
type SessionType = {
    "monday": number;
    "tuesday": number;
    "wednesday": number;
    "thursday": number;
    "friday": number;
    "saturday": number;
    "sunday": number;
}

export default class Session {
   private _session: SessionType;

    constructor(Session: SessionType) {
        this._session = Session;
    }

    get Session() {
        return this._session
    }
}

