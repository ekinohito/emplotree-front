import { Button, Stack } from "@mui/material";
import { useState } from "react";
import useTokens from "src/hooks/useTokens";
import { JwtString } from "src/types/JwtString";
import PersonFull from "src/types/PersonFull";
import ConnectionDialog from "./ConnectionDialog";
import PersonPanel from "./PersonPanel";

export default function PersonDescription({
    person,
    jwt,
    request,
}: {
    person: PersonFull;
    jwt: JwtString;
    request: () => void;
}) {
    const { ADD_CONNECTION } = useTokens();
    const [open, setOpen] = useState(false);
    return (
        <Stack spacing={1}>
            <span>email: {(person as any).email}</span>
            {person.subordinates.map((subordinate) => (
                <PersonPanel
                    key={subordinate.id}
                    person={subordinate}
                    jwt={jwt}
                />
            ))}
            <Button onClick={() => setOpen(true)}>{ADD_CONNECTION}</Button>
            <ConnectionDialog
                open={open}
                onClose={() => {
                    setOpen(false);
                    request();
                }}
                supervisorEmail={person.email}
            />
        </Stack>
    );
}
