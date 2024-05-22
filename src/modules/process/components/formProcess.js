import React from "react";

import { Box, TextField, Button, Typography } from "@mui/material";

import { useFormik } from "formik";
import * as yup from "yup";


const validateSchema = yup.object({
    habilidad: yup
        .number('Introduzca un valor')
        .min(0, 'No puede ser negativo')
        .required('Este campo es requerido')
        .typeError('Debe ser un número'),
        esfuerzo: yup
        .number('Introduzca un valor')
        .min(0, 'No puede ser negativo')
        .required('Este campo es requerido')
        .typeError('Debe ser un número'),
        condiciones: yup
        .number('Introduzca un valor')
        .min(0, 'No puede ser negativo')
        .required('Este campo es requerido')
        .typeError('Debe ser un número'),
        consistencia: yup
        .number('Introduzca un valor')
        .min(0, 'No puede ser negativo')
        .required('Este campo es requerido')
        .typeError('Debe ser un número'),
        necesidad: yup
        .number('Introduzca un valor')
        .min(0, 'No puede ser negativo')
        .required('Este campo es requerido')
        .typeError('Debe ser un número'),
        fatiga: yup
        .number('Introduzca un valor')
        .min(0, 'No puede ser negativo')
        .required('Este campo es requerido')
        .typeError('Debe ser un número'),
        dePie: yup
        .number('Introduzca un valor')
        .min(0, 'No puede ser negativo')
        .required('Este campo es requerido')
        .typeError('Debe ser un número'),
        postura: yup
        .number('Introduzca un valor')
        .min(0, 'No puede ser negativo')
        .required('Este campo es requerido')
        .typeError('Debe ser un número'),
        fuerza: yup
        .number('Introduzca un valor')
        .min(0, 'No puede ser negativo')
        .required('Este campo es requerido')
        .typeError('Debe ser un número'),
})

export const FormProcess = (props) => {

    const formik = useFormik({
        initialValues: {
            habilidad: '',
            esfuerzo: '',
            condiciones: '',
            consistencia: '',
            necesidad: '',
            fatiga: '',
            dePie: '',
            postura: '',
            fuerza: ''
        },
        validationSchema: validateSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },

    })

    return (

        <Box
            sx={{
                width: '50%',
                height: '200vh',
                marginLeft: '5%',
                marginTop: '40px'
            }}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'normal'}
            flexDirection={'column'}
        >

            <Typography variant="h1" component="div" sx={{ fontSize: 25 }}>
                Añadir Factores de calificación
            </Typography>

            <Box
                sx={{
                    width: '100%',
                    height: '100%'
                }}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'initial'}
                justifyContent={'initial'}
            >
                <form onSubmit={formik.handleSubmit}>

                    <TextField
                        id="habilidad"
                        name="habilidad"
                        label="Habilidad"
                        variant="outlined"
                        style={{ width: '80%', marginBottom: '40px', marginTop: '10%' }}
                        value={formik.values.habilidad}
                        onChange={formik.handleChange}
                        onblur={formik.handleBlur}
                        helperText={formik.touched.habilidad && formik.errors.habilidad}
                    />

                    <TextField
                        id="esfuerzo"
                        name="esfuerzo"
                        label="Esfuerzo"
                        variant="outlined"
                        style={{ width: '80%', marginBottom: '40px' }}
                        value={formik.values.esfuerzo}
                        onChange={formik.handleChange}
                        onblur={formik.handleBlur}
                        helperText={formik.touched.esfuerzo && formik.errors.esfuerzo}
                    />

                    <TextField
                        id="condiciones"
                        name="condiciones"
                        label="Condiciones"
                        variant="outlined"
                        style={{ width: '80%', marginBottom: '40px' }}
                        value={formik.values.condiciones}
                        onChange={formik.handleChange}
                        onblur={formik.handleBlur}
                        helperText={formik.touched.condiciones && formik.errors.condiciones}
                    />

                    <TextField
                        id="consistencia"
                        name="consistencia"
                        label="Consistencia"
                        variant="outlined"
                        style={{ width: '80%', marginBottom: '10%' }}
                        value={formik.values.consistencia}
                        onChange={formik.handleChange}
                        onblur={formik.handleBlur}
                        helperText={formik.touched.consistencia && formik.errors.consistencia}
                    />

                    <Typography variant="h1" component="div" sx={{ flexGrow: 0.5, fontSize: 25 }}>
                        Suplementos por descanso
                    </Typography>
                    <Typography variant="h2" component="div" sx={{ flexGrow: 0.3, fontSize: 15, marginTop: '10px', marginBottom: '10%' }} style={{ color: 'gray' }}>
                        *La suma de los porcentajes no tiene que ser mayor a 20%*
                    </Typography>

                    <TextField
                        id="necesidad"
                        name="necesidad"
                        label="Necesidades"
                        variant="outlined"
                        style={{ width: '80%', marginBottom: '7%' }}
                        value={formik.values.necesidad}
                        onChange={formik.handleChange}
                        onblur={formik.handleBlur}
                        helperText={formik.touched.necesidad && formik.errors.necesidad}
                    />

                    <TextField
                        id="fatiga"
                        name="fatiga"
                        label="Fatiga"
                        variant="outlined"
                        style={{ width: '80%', marginBottom: '7%' }}
                        value={formik.values.fatiga}
                        onChange={formik.handleChange}
                        onblur={formik.handleBlur}
                        helperText={formik.touched.fatiga && formik.errors.fatiga}
                    />

                    <Typography variant="h2" component="div" sx={{ flexGrow: 0.3, fontSize: 15, marginTop: '10px', marginBottom: '10%' }} style={{ color: 'gray' }}>
                        Suplementos variables
                    </Typography>

                    <TextField
                        id="dePie"
                        name="dePie"
                        label="Trabajar de pie"
                        variant="outlined"
                        style={{ width: '80%', marginBottom: '7%' }}
                        value={formik.values.dePie}
                        onChange={formik.handleChange}
                        onblur={formik.handleBlur}
                        helperText={formik.touched.dePie && formik.errors.dePie}
                    />

                    <TextField
                        id="postura"
                        name="postura"
                        label="Postura Anormal"
                        variant="outlined"
                        style={{ width: '80%', marginBottom: '7%' }}
                        value={formik.values.postura}
                        onChange={formik.handleChange}
                        onblur={formik.handleBlur}
                        helperText={formik.touched.postura && formik.errors.postura}
                    />

                    <TextField
                        id="energia"
                        name="energia"
                        label="Energía Muscular"
                        variant="outlined"
                        style={{ width: '80%', marginBottom: '7%' }}
                        value={formik.values.energia}
                        onChange={formik.handleChange}
                        onblur={formik.handleBlur}
                        helperText={formik.touched.energia && formik.errors.energia}
                    />

                    <Button
                        variant="contained"
                        style={{
                            borderRadius: '10px',
                            width: '50%',
                            height: '40px',
                            background: '#4740FF'
                        }}
                        type="submit"
                        onSubmit={formik.handleSubmit}
                    >
                        Enviar datos
                    </Button>
                </form>
            </Box>
        </Box >
    );
}