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

export default function RegisterDialog({
    open,
    onClose,
    register,
}: {
    open: boolean;
    onClose: () => void;
    register: (email: string, password: string, name: string) => void;
}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Register</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please, provide your email and password to register
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
                        value={password}
                        onChange={(event) =>
                            setPassword(event.currentTarget.value)
                        }
                    />
                    <TextField
                        variant="standard"
                        label="name"
                        type="text"
                        value={name}
                        onChange={(event) =>
                            setName(event.currentTarget.value)
                        }
                    />
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={() => register(email, password, name)}>
                    Register
                </Button>
            </DialogActions>
        </Dialog>
    );
}
