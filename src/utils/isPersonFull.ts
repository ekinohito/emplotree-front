import PersonFull from "src/types/PersonFull";
import isPerson from "./isPerson";
import isPersonBase from "./isPersonBase";

export default function isPersonFull(data: any): data is PersonFull {
    if (!isPersonBase(data)) return false
    const { infoComplete, details, subordinates } = data as PersonFull
    if (infoComplete !== true) return false
    if (typeof details !== "string") return false
    if (!Array.isArray(subordinates)) return false
    return subordinates.every(isPerson)
}