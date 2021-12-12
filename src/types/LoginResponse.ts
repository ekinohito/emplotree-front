import { JwtString } from "./JwtString";
import { Person } from "./Person";

export interface LoginResponse {
    status: "ok";
    jwt: JwtString;
    person: Person;
}
