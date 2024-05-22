
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
} from "@mui/material";

import React from "react";

export const AppBarActivities = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <Typography variant="h1" component="div" sx={{ flexGrow: 1, fontSize: 25 }}>
                        CREAR ACTIVIDADES
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />

                </Toolbar>
            </AppBar>
        </Box>
    );
}