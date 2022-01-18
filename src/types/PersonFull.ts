import { Person } from "./Person";
import PersonBase from "./PersonBase";

export default interface PersonFull extends PersonBase {
    infoComplete: true
    details: string
    email: string
    subordinates: Person[]
}
