import { Classe } from "./Classe";

export class User {
  _id: string;
  lastName: string;
  firstName: string;
  email: string;
  phone: number;
  cin: number;
  classe? = new Classe();
  birthDate: Date;
  type: string;
  creationDate: Date;
  photo: string;
  pwd: string;
  }

  export class UserToSelect {
    _id: string;
    name: string;
    photo: string;
  }
  