import React, { useEffect, useState } from 'react'
import { Box, Grid } from "@mui/material";
import { CardActivity } from './cardActivity';
import { getProcesses } from '../../../api/api';


export const GridCards = (props) => {

    const [data, setData] = useState([]);
    const getData = async () => {
        const dataApi = await getProcesses();
        setData(dataApi.data);
    }

    useEffect(() => {
        getData();
    }, []);

    return (

        <Box
            justifyContent={'center'}
            alignItems={'center'}
            display={'flex'}
            width={'100%'}
        >

            <Grid container spacing={5}
                style={{ margin: '20px' }}
            >
                {
                    data.map((item, index) => {
                        return (
                            <Grid item xs={12} md={3} key={index}>
                                <CardActivity data={item} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
    );
}