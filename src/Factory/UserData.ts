

import { UserDataType } from "../types/UserTypes";

class UserData {
      private data: UserDataType;
      
      constructor(data: UserDataType) {
            this.data = data;
      }

      get id() {
            return this.data.id;
      }

      get name() {
            return this.data.name;
      }

      get score() {
            return this.data.score;
      }

      get statistics() {
            return {
                  intensity: this.data.statistics.intensity,
                  cardio: this.data.statistics.cardio,
                  energy: this.data.statistics.energy,
                  endurance: this.data.statistics.endurance,
                  speed: this.data.statistics.speed,
                  strength: this.data.statistics.strength
            }
      }

      get macrosValue() {
            return {
                  calories : this.data.macrosValue.calories,
                  proteins : this.data.macrosValue.proteins,
                  carbs : this.data.macrosValue.carbs,
                  fats : this.data.macrosValue.fats
            }
      }

      get sessionLength() {
            return {
                  monday : this.data.sessionLength.monday,
                  tuesday : this.data.sessionLength.tuesday,
                  wednesday : this.data.sessionLength.wednesday,
                  thursday : this.data.sessionLength.thursday,
                  friday : this.data.sessionLength.friday,
                  saturday : this.data.sessionLength.saturday,
                  sunday : this.data.sessionLength.sunday
            }
      }

      get activities() { 
            return this.data.activities;
      }
  }


export default UserData;

