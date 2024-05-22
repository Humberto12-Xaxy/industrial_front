
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Badge,
    Box,
    Button,
} from "@mui/material";

import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import React from "react";
import { useNavigate } from "react-router-dom";

export const AppBarProcess = () => {

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
                        M.A.E.S.T.R.O
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Badge>
                            
                        </Badge>
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    );
}