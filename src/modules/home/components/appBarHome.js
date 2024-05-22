
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Badge,
    Box,
    Button,
} from "@mui/material";

import React from "react";
import { useNavigate } from "react-router-dom";

export const AppBarHome = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/newProcess");
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent">
                <Toolbar>

                    <Typography variant="h1" component="div" sx={{ flexGrow: 1, fontSize: 25 }}>
                        M.A.E.S.T.R.O
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Badge>
                            <Button
                                id="demo-positioned-button"
                                aria-controls='demo-positioned-menu'
                                style={{ background: '#4740FF' }}
                                variant="contained"
                                onClick={handleClick}
                            >
                                Añadir nuevo proceso
                            </Button>
                        </Badge>
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    );
}