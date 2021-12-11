import PersonShort from "src/types/PersonShort";
import isPersonBase from "./isPersonBase";

export default function isPersonShort(data: any): data is PersonShort {
    if (!isPersonBase(data)) return false
    const { infoComplete } = data as PersonShort
    if (infoComplete !== false) return false
    return true
}