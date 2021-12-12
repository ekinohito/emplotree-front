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

export default function LoginDialog({
    open,
    onClose,
    login,
}: {
    open: boolean;
    onClose: () => void;
    login: (email: string, password: string) => void;
}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please, provide your email and password to login
                </DialogContentText>
                <Stack spacing={1}>
                    <TextField
                        variant="standard"
                        label="email"
                        type="email"
                        value={email}
                        onChange={(event) =>
                            setEmail(event.currentTarget.value)
                        }
                    />
                    <TextField
                        variant="standard"
                        label="password"
                        type="password"
                        onChange={(event) =>
                            setPassword(event.currentTarget.value)
                        }
                    />
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={() => login(email, password)}>
                    Login
                </Button>
            </DialogActions>
        </Dialog>
    );
}
