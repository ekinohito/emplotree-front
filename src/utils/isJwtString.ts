import { JwtString } from "src/types/JwtString";

export default function isJwtString(data: any): data is JwtString {
    if (data == null) return false
    if (typeof data !== "string") return false
    return true
}