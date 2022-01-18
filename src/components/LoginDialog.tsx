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
import useTokens from "src/hooks/useTokens";

export default function LoginDialog({
    open,
    onClose,
    login,
}: {
    open: boolean;
    onClose: () => void;
    login: (email: string, password: string) => void;
}) {
    const {LOGIN, LOGIN_PROMPT, EMAIL, PASSWORD} = useTokens()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle sx={{textTransform: "capitalize"}}>{LOGIN}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {LOGIN_PROMPT}
                </DialogContentText>
                <Stack spacing={1}>
                    <TextField
                        variant="standard"
                        label={EMAIL}
                        type="email"
                        value={email}
                        onChange={(event) =>
                            setEmail(event.currentTarget.value)
                        }
                        sx={{textTransform: "capitalize"}}
                    />
                    <TextField
                        variant="standard"
                        label={PASSWORD}
                        type="password"
                        onChange={(event) =>
                            setPassword(event.currentTarget.value)
                        }
                        sx={{textTransform: "capitalize"}}
                    />
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={() => login(email, password)}>
                    {LOGIN}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
