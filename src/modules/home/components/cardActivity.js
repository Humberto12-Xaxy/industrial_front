import React from 'react';
import {
    Card,
    CardContent,
    Typography,
    CardActionArea
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const CardActivity = (props) => {
    const navigate = useNavigate()
    const handleClickCard = () => {
        navigate(`/process/${props.data.id}`)
    }
    return (
        <Card sx={{ maxWidth: 350, maxHeight: 200 }} style={{ marginBottom: '30px', background: '#A196FF' }}>
            <CardActionArea onClick={handleClickCard}>
                <CardContent>
                    <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
                        {props.data.nombre}
                    </Typography>
                    <Typography variant='body2'>
                        {props.data.descripcion}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}