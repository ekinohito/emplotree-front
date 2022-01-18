import { useState } from "react";
import { JwtString } from "src/types/JwtString";
import PersonFull from "src/types/PersonFull";
import { PersonId } from "src/types/PersonId";
import isPersonResponse from "src/utils/isPersonResponse";
import useApi from "./useApi";

export default function usePerson(id: PersonId, jwt: JwtString) {
    const { status: requestStatus, data, fetch } = useApi();
    //const [personFull, setPersonFull] = useState<PersonFull | null>(null)
    const personFull = data?.person // (isPersonResponse(data) && data.person) || null;
    personFull && ( personFull.subordinates = data?.subordinates)
    const status = requestStatus === "fulfilled" && personFull == null ? "rejected" : requestStatus
    return {
        request() {
            fetch(`${process.env.NEXT_PUBLIC_API}/supervisor?id=${id}`, {
                headers: { authorization: `Bearer ${jwt}` },
            });
        },
        status,
        personFull,
    };
}
