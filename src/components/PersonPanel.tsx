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
import { Person } from "src/types/Person";
import isPersonFull from "src/utils/isPersonFull";
import PersonDescription from "./PersonDescription";

export default function PersonPanel({ person }: { person: Person }) {
    const { status, personFull, request } = usePerson(person.id);
    return (
        <div>
            <Accordion
                onChange={() =>
                    !isPersonFull(person) &&
                    status === "unrequested" &&
                    request()
                }
            >
                <AccordionSummary>
                    <Stack spacing={2} direction="row" alignItems="center">
                        <Avatar name={person.name} variant="beam"/>
                        <Typography variant="h6">{person.name}</Typography>
                    </Stack>
                </AccordionSummary>
                <AccordionDetails>
                    {person.infoComplete ? (
                        person.details
                    ) : status === "fulfilled" ? (
                        <PersonDescription person={personFull!} />
                    ) : (
                        <CircularProgress />
                    )}
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
