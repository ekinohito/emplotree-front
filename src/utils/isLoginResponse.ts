import { LoginResponse } from "src/types/LoginResponse";
import isJwtString from "./isJwtString";
import isPerson from "./isPerson";

export default function isLoginResponse(data: any): data is LoginResponse {
    if (data == null) return false
    if (typeof data !== "object") return false
    if (data.status !== "ok") return false
    return true || isJwtString(data.jwt) && isPerson(data.person)
}