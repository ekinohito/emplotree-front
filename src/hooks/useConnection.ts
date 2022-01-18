import { useEffect, useState } from "react"
import useApi from "./useApi"

export default function useConnection(close: () => void) {
    const { data, fetch } = useApi()
    const [status, setStatus] = useState<"unrequested" | "pending" | "found" | "not_found" | "created">("unrequested")
    useEffect(() => {
        setStatus(status => (status == "pending")?(data == null)? "not_found" : "found" : status)
    }, [data])
    return {
        async find(email: string) {
            setStatus("pending")
            await fetch(`${process.env.NEXT_PUBLIC_API}/users/1?email=${email}`)
        },
        async add(email: string, supervisor_email: string) {
            if (status !== "found") return
            await fetch(`${process.env.NEXT_PUBLIC_API}/users/1?email=${email}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json; charset=utf-8"},
                body: JSON.stringify({ supervisor_email })
            })
            setStatus("created")
            close()
        },
        data,
        status,
        found: !!data
    }
}