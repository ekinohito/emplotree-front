import {
    AppBar,
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Stack,
    TextField,
    Toolbar,
    Typography,
} from "@mui/material";
import Avatar from "boring-avatars";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import LoginDialog from "src/components/LoginDialog";
import PersonAvatarAndName from "src/components/PersonAvatarAndName";
import PersonPanel from "src/components/PersonPanel";
import useLogin from "src/hooks/useLogin";

const Home: NextPage = () => {
    const { jwt, person, login, logout } = useLogin();
    const [loginDialogOpen, setLoginDialogOpen] = useState(false);
    const loggedIn = jwt != null && person != null;
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h4" flexGrow={1}>
                        Emplotree
                    </Typography>
                    {!loggedIn ? (
                        <Button
                            variant="contained"
                            onClick={() => setLoginDialogOpen(true)}
                        >
                            Login
                        </Button>
                    ) : (
                        <>
                            <PersonAvatarAndName person={person} />
                            <Button variant="contained" color="error" onClick={logout}>
                                Logout
                            </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
            <LoginDialog
                open={loginDialogOpen}
                onClose={() => setLoginDialogOpen(false)}
                login={login}
            />
            <Container sx={{ paddingTop: 4 }}>
                {loggedIn && <PersonPanel person={person} jwt={jwt} />}
            </Container>
        </div>
    );
};

export default Home;
