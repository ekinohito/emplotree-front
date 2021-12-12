import { PersonId } from "./PersonId";

export default interface PersonBase {
    id: PersonId
    infoComplete: boolean
    name: string
}