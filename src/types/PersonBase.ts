import { PersonID } from "./PersonID";

export default interface PersonBase {
    id: PersonID
    infoComplete: boolean
    name: string
}