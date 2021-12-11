import PersonResponse from "src/types/PersonResponse";
import isPersonFull from "./isPersonFull";

export default function isPersonResponse(data: any): data is PersonResponse {
    if (data == null) return false
    if (typeof data !== "object") return false
    if (data.status !== "ok") return false
    return isPersonFull(data.person)
}