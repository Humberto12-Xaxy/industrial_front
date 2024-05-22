
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Box
} from "@mui/material";

import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import React from "react";
import { useNavigate } from "react-router-dom";

export const AppBarCreateProcess = () => {

    let navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <IconButton
                        size="medium"
                        edge="start"
                        style={{ color: '#4740FF' }}
                        aria-label={'arrow back'}
                        sx={{ mr: 2 }}
                        onClick={() => navigate(-1)}
                    >
                        <ArrowBackOutlinedIcon />
                    </IconButton>

                    <Typography variant="h1" component="div" sx={{ flexGrow: 1, fontSize: 25 }}>
                        CREAR PROCESO
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />

                </Toolbar>
            </AppBar>
        </Box>
    );
}