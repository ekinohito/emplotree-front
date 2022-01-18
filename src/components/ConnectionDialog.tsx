import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    Stack,
    TextField,
    DialogActions,
    Button,
} from "@mui/material";
import React, { useState } from "react";
import useConnection from "src/hooks/useConnection";
import useTokens from "src/hooks/useTokens";
import PersonAvatarAndName from "./PersonAvatarAndName";

export default function ConnectionDialog({
    open,
    onClose,
    supervisorEmail,
}: {
    open: boolean;
    onClose: () => void;
    supervisorEmail: string;
}) {
    const {LOGIN, ADD_CONNECTION, EMAIL, SEARCH, ADD} = useTokens()
    const {add, find, data, found} = useConnection(onClose)
    const [email, setEmail] = useState("");
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle sx={{textTransform: "capitalize"}}>{ADD_CONNECTION}</DialogTitle>
            <DialogContent>
                <Stack spacing={1}>
                    <TextField
                        variant="standard"
                        label={EMAIL}
                        type="search"
                        value={email}
                        onChange={(event) =>
                            setEmail(event.currentTarget.value)
                        }
                        sx={{textTransform: "capitalize"}}
                    />
                    {data && <PersonAvatarAndName person={data}/>}
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={() => find(email)}>
                    {SEARCH}
                </Button>
                <Button variant="contained" onClick={() => add(email, supervisorEmail)} disabled={!found}>
                    {ADD}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
