import { JwtString } from "src/types/JwtString";
import PersonFull from "src/types/PersonFull";
import PersonPanel from "./PersonPanel";

export default function PersonDescription({ person, jwt }: { person: PersonFull, jwt: JwtString }) {
    return <>
        email: {(person as any).email}
        {person.subordinates.map(subordinate => <PersonPanel key={subordinate.id} person={subordinate} jwt={jwt} />)}
    </>;
}
