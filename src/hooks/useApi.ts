import { useState } from "react";

export default function useApi() {
    const [status, setStatus] = useState<"unrequested" | "fulfilled" | "pending" | "rejected">("unrequested")
    const [data, setData] = useState<any>(null)
    const [error, setError] = useState<any>(null)
    return {
        async fetch(input: RequestInfo, init?: RequestInit) {
            setStatus("pending")
            try {
                const res = await fetch(input, init)
                const data = await res.json()
                setData(data)
                setStatus("fulfilled")
            } catch (e) {
                setError(e)
                setStatus("rejected")
            }
        },
        clear() {
            setStatus("unrequested")
            setData(null)
        },
        status,
        data,
        error
    }
}