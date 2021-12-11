import { useState } from "react";
import PersonFull from "src/types/PersonFull";
import { PersonID } from "src/types/PersonID";
import isPersonResponse from "src/utils/isPersonResponse";

export default function usePerson(id: PersonID) {
    const [status, setStatus] = useState<"unrequested" | "fulfilled" | "pending" | "rejected">("unrequested")
    const [personFull, setPersonFull] = useState<PersonFull | null>(null)
    return {
        async request() {
            setStatus("pending")
            try {
                const res = await fetch(`/api/person/${id}`)
                const data = await res.json()
                if (isPersonResponse(data)) {
                    setPersonFull(data.person)
                    setStatus("fulfilled")
                } else {
                    console.error("not proper response")
                    setStatus("rejected")
                }
            } catch {
                return setStatus("rejected")
            }
        },
        status,
        personFull
    }
}
