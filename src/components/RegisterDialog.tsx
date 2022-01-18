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

export default function RegisterDialog({
    open,
    onClose,
    register,
}: {
    open: boolean;
    onClose: () => void;
    register: (email: string, password: string, name: string) => void;
}) {
    const {REGISTER, REGISTER_PROMPT, NAME, EMAIL, PASSWORD} = useTokens()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle sx={{textTransform: "capitalize"}}>{REGISTER}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {REGISTER_PROMPT}
                </DialogContentText>
                <Stack spacing={1}>
                    <TextField
                        sx={{textTransform: "capitalize"}}
                        variant="standard"
                        label={EMAIL}
                        type="email"
                        value={email}
                        onChange={(event) =>
                            setEmail(event.currentTarget.value)
                        }
                    />
                    <TextField
                        sx={{textTransform: "capitalize"}}
                        variant="standard"
                        label={PASSWORD}
                        type="password"
                        value={password}
                        onChange={(event) =>
                            setPassword(event.currentTarget.value)
                        }
                    />
                    <TextField
                        sx={{textTransform: "capitalize"}}
                        variant="standard"
                        label={NAME}
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
                    {REGISTER}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
