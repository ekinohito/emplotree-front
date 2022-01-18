import {
    AppBar,
    Button,
    Container,
    Link,
    Stack,
    Toolbar,
    Typography,
} from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import LoginDialog from "src/components/LoginDialog";
import PersonAvatarAndName from "src/components/PersonAvatarAndName";
import PersonPanel from "src/components/PersonPanel";
import RegisterDialog from "src/components/RegisterDialog";
import useLogin from "src/hooks/useLogin";
import useRegister from "src/hooks/useRegister";
import useTokens from "src/hooks/useTokens";
import NextLink from 'next/link'

const Home: NextPage = () => {
    const {EMPLOTREE, LOGIN, REGISTER, LOGOUT, LOGIN_FIRST} = useTokens()
    const { jwt, person, login, logout } = useLogin();
    const { register } = useRegister(login);
    const [loginDialogOpen, setLoginDialogOpen] = useState(false);
    const [registerDialogOpen, setRegisterDialogOpen] = useState(false);
    const loggedIn = jwt != null && person != null;
    useEffect(() => {
        setLoginDialogOpen(false)
        setRegisterDialogOpen(false)
    }, [jwt])
    return (
        <div>
            <Head>
                <title>{EMPLOTREE}</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AppBar position="sticky">
                <Toolbar>
                    <Stack direction="row" spacing={2} alignItems="center" flexGrow={1}>
                        <Typography variant="h4" sx={{textTransform: "capitalize"}}>
                            {EMPLOTREE}
                        </Typography>
                        <NextLink passHref href="." locale="ru"><Link variant="h6" color="#eee">ru</Link></NextLink>
                        <NextLink passHref href="." locale="en"><Link variant="h6" color="#eee">en</Link></NextLink>
                    </Stack>
                    
                    {!loggedIn ? (
                        <>
                            <Button
                                variant="contained"
                                onClick={() => setLoginDialogOpen(true)}
                            >
                                {LOGIN}
                            </Button>
                            <Button
                                variant="contained"
                                onClick={() => setRegisterDialogOpen(true)}
                            >
                                {REGISTER}
                            </Button>
                        </>
                    ) : (
                        <>
                            <PersonAvatarAndName person={person} />
                            <Button
                                variant="contained"
                                color="error"
                                onClick={logout}
                            >
                                {LOGOUT}
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
            <RegisterDialog
                open={registerDialogOpen}
                onClose={() => setRegisterDialogOpen(false)}
                register={register}
            />
            <Container sx={{ paddingTop: 4 }}>
                {loggedIn ? <PersonPanel person={person} jwt={jwt} /> : LOGIN_FIRST}
            </Container>
        </div>
    );
};

export default Home;
