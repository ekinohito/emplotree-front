import PersonFull from "./PersonFull";

export default interface PersonResponse {
    status: "ok",
    person: PersonFull
}