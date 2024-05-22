import React from 'react';
import { Container } from '@mui/material';

// Import components
import { GridCards } from './components/gridCards';
import { AppBarHome } from './components/appBarHome';

export const Home = () => {
    
    
    return (
        <>
            <AppBarHome />
            <Container maxWidth={'lg'}>
                <GridCards />
            </Container>
        </>
    );
}
