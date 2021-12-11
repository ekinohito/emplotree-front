import { Person } from "src/types/Person";
import isPersonBase from "./isPersonBase";
import isPersonShort from "./isPersonShort";

export default function isPerson(data: any): data is Person {
    return isPersonShort(data) || isPersonBase(data)
} 