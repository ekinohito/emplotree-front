import { useEffect } from "react"
import useApi from "./useApi"
import useLogin from "./useLogin";

export default function useRegister(login: (email: string, password: string) => void) {
    const { status, fetch, error } = useApi()
    useEffect(() => {
        console.log({status, error})
    }, [status, error])
    return {
        async register(email: string, password: string, name: string) {
            await fetch(`${process.env.NEXT_PUBLIC_API}/users`, {
                method: "POST",
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                body: `email=${email}&password=${password}&name=${name}`
            })
            login(email, password)
        },
        status
    }
}