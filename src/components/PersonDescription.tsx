import PersonFull from "src/types/PersonFull";
import PersonPanel from "./PersonPanel";

export default function PersonDescription({ person }: { person: PersonFull }) {
    return <>
        details: {person.details}
        {person.subordinates.map(subordinate => <PersonPanel key={subordinate.id} person={subordinate}/>)}
    </>;
}
