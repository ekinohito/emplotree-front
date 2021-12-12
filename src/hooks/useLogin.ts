import isLoginResponse from "src/utils/isLoginResponse"
import useApi from "./useApi"

export default function useLogin() {
    const { status, data, fetch, clear } = useApi()
    const { jwt, person } = isLoginResponse(data) && data || {jwt: null, person: null}
    return {
        async login(email: string, password: string) {
            fetch("/api/login", {
                method: "POST",
                body: JSON.stringify({ email, password })
            })
        },
        logout: clear,
        status,
        jwt,
        person
    }
}