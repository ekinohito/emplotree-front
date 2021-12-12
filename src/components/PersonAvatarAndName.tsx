import { Stack, Typography } from "@mui/material";
import Avatar from "boring-avatars";
import React from "react";
import { Person } from "src/types/Person";

export default function PersonAvatarAndName({ person }: { person: Person }) {
    return (
        <Stack spacing={2} direction="row" alignItems="center" marginX={2}>
            <Avatar name={person.name} variant="beam" />
            <Typography variant="h6">{person.name}</Typography>
        </Stack>
    );
}
