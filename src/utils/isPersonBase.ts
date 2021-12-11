import PersonBase from "src/types/PersonBase";

export default function isPersonBase(data: any): data is PersonBase {
    if (data == null) return false
    if (typeof data !== "object") return false
    const { infoComplete, id, name } = data as PersonBase
    if (typeof infoComplete !== "boolean") return false
    if (typeof id !== "string") return false
    if (typeof name !== "string") return false
    return true
}