import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    CircularProgress,
    Stack,
    Typography,
} from "@mui/material";
import Avatar from "boring-avatars";
import usePerson from "src/hooks/usePerson";
import { JwtString } from "src/types/JwtString";
import { Person } from "src/types/Person";
import isPersonFull from "src/utils/isPersonFull";
import PersonAvatarAndName from "./PersonAvatarAndName";
import PersonDescription from "./PersonDescription";

export default function PersonPanel({
    person,
    jwt,
}: {
    person: Person;
    jwt: JwtString;
}) {
    const { status, personFull, request } = usePerson(person.id, jwt);
    return (
        <div>
            <Accordion
                onChange={() =>
                    !isPersonFull(person) &&
                    (status === "unrequested" || status === "rejected") &&
                    request()
                }
            >
                <AccordionSummary>
                    <PersonAvatarAndName person={person} />
                </AccordionSummary>
                <AccordionDetails>
                    {person.infoComplete ? (
                        person.details
                    ) : status === "fulfilled" && personFull != undefined ? (
                        <PersonDescription person={personFull} jwt={jwt} request={request} />
                    ) : (
                        <CircularProgress />
                    )}
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
