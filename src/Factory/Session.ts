import SessionType from "../types/SessionType";
class Session {
   private _session: SessionType;

    constructor(Session: SessionType) {
        this._session = Session;
    }

    get Session() {
        return this._session
    }
}

export default Session;