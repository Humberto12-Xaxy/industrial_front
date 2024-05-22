import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Box,
    Typography,
    Paper
} from "@mui/material";


export const TableProcess = (props) => {

    return (
        <Box sx={{
            width:
                'auto',
            height: '200vh',
            display: 'flex',
            justifyContent: 'initial',
            alignItems: 'initial',
            flexDirection: 'column',
            backgroundColor: 'gray',
        }}>
            <Box sx={{
                width: '100%',
                height: '7%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Typography
                    variant="h1"
                    component="div"
                    sx={{ fontSize: 25, fontWeight: 'bold' }}>
                    Registro de lecturas para estudio de tiempos
                </Typography>
            </Box>
            <Box sx={{ width: 'auto%', height: 'auto', padding: '2%' }}>
                <TableContainer component={Paper} >
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell align="initial">Descripción del proceso</TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="initial">Analista</TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="initial" sx={{ wordBreak: 'break-word' }}>MÉTODO: Actual mejorado</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>Fecha</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}></TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>Hora iniciada</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}></TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>Hora Finalizada</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}></TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>Numero de obsevaciones</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right" sx={{ width: '1%' }}>Elementos</TableCell>
                                <TableCell align="initial"></TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>1</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>2</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>3</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>4</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>5</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>6</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>7</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>8</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>9</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>10</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="initial" sx={{width: '3%',wordBreak: 'break-word' }}>Ciclos</TableCell>
                                <TableCell align="initial" sx={{ width: '3%',wordBreak: 'break-word' }}>Observaciones</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>1</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>2</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>3</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>4</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>5</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>6</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>7</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>8</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>9</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>10</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="initial" sx={{ wordBreak: 'break-word' }}>1</TableCell>
                                <TableCell align="initial" sx={{ wordBreak: 'break-word' }}>Observación 1</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>1</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>2</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>3</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>4</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>5</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>6</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>7</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>8</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>9</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>10</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="initial" sx={{ wordBreak: 'break-word' }}>2</TableCell>
                                <TableCell align="initial" sx={{ wordBreak: 'break-word' }}>Observación 2</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>1</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>2</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>3</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>4</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>5</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>6</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>7</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>8</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>9</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>10</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="initial" sx={{ wordBreak: 'break-word' }}>3</TableCell>
                                <TableCell align="initial" sx={{ wordBreak: 'break-word' }}>Observación 3</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>1</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>2</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>3</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>4</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>5</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>6</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>7</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>8</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>9</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>10</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="initial" sx={{ wordBreak: 'break-word' }}>4</TableCell>
                                <TableCell align="initial" sx={{ wordBreak: 'break-word' }}>Observación 4</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>1</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>2</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>3</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>4</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>5</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>6</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>7</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>8</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>9</TableCell>
                                <TableCell align="center" sx={{ wordBreak: 'break-word' }}>10</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box sx={{ width: 'auto', height: 'auto', padding: '2%', marginTop: '1%' }}>
                <TableContainer component={Paper}>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell align="initial" sx={{ minWidth: '6%', wordBreak: 'break-word' }}>Resumen</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>1</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>2</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>3</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>4</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>5</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>6</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>7</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>8</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>9</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>10</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="initial" sx={{ width: '6%', wordBreak: 'break-word' }}>Resumen</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>1</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>2</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>3</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>4</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>5</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>6</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>7</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>8</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>9</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>10</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="initial" sx={{ width: '6%', wordBreak: 'break-word' }}>Tiempo total estandar</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>1</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>2</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>3</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>4</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>5</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>6</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>7</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>8</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>9</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>10</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="initial" sx={{ width: '6%', wordBreak: 'break-word' }}>Observaciones efectuadas</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>1</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>2</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>3</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>4</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>5</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>6</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>7</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>8</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>9</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>10</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="initial" sx={{ width: '6%', wordBreak: 'break-word' }}>Tiempo medio elemental</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>1</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>2</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>3</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>4</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>5</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>6</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>7</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>8</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>9</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>10</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="initial" sx={{ width: '6%', wordBreak: 'break-word' }}>Factor de calificación</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>1</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>2</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>3</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>4</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>5</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>6</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>7</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>8</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>9</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>10</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="initial" sx={{ width: '6%', wordBreak: 'break-word' }}>Tolerancias</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>1</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>2</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>3</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>4</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>5</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>6</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>7</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>8</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>9</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>10</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="initial" sx={{ minWidth: '6%', wordBreak: 'break-word' }}>Tiempo asignado estandar</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>1</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>2</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>3</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>4</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>5</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>6</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>7</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>8</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>9</TableCell>
                                <TableCell align="center" sx={{ width: '3%', wordBreak: 'break-word' }}>10</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}