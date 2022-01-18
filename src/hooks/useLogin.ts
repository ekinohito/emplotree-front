import isLoginResponse from "src/utils/isLoginResponse"
import useApi from "./useApi"

export default function useLogin() {
    const { status, data, fetch, clear } = useApi()
    const { jwt, person } = data || {jwt: null, person: null} // isLoginResponse(data) && data || {jwt: null, person: null}
    return {
        async login(email: string, password: string) {
            fetch(`${process.env.NEXT_PUBLIC_API}/auth/login`, {
                method: "POST",
                headers: {"Content-Type": "application/json; charset=utf-8"},
                body: JSON.stringify({ email, password })
            })
        },
        logout: clear,
        status,
        jwt,
        person
    }
}