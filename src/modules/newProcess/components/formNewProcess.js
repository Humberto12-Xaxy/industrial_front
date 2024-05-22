import React from "react";

import { Box, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const validateSchema = yup.object({
    processName: yup
        .string('Introduzca un valor')
        .required('Este campo es requerido'),
    processDescription: yup
        .string('Introduzca un valor')
        .required('Este campo es requerido'),
    numberActivities: yup
        .number('Introduzca un valor')
        .required('Este campo es requerido'),
})

export const FormNewProcess = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            processName: '',
            processDescription: '',
            numberActivities: 0
        },
        validationSchema: validateSchema,
        onSubmit: (values) => {
            console.log(values)
            navigate('/createActivities',
                {
                    state: {
                        processName: values.processName,
                        processDescription: values.processDescription,
                        numberActivities: values.numberActivities
                    }
                }
            )
        },
    })


    return (
        <Box
            sx={{
                width: '100%',
                height: '90vh',
            }}
            display='flex'
            justifyContent='center'
            alignItems='center'
        >

            <Box
                sx={{
                    width: '100%',
                    maxWidth: '800px', // Ajusta el ancho máximo según tus necesidades
                    height: '70%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    padding: '20px',
                }}

                style={{ border: '1px solid #000' }}
            >

                <TextField
                    id="outlined-basic"
                    label="Nombre del proceso"
                    name="processName"
                    variant="outlined"
                    style={{ marginBottom: '5%', width: '60%' }}
                    value={formik.values.processName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.processName && Boolean(formik.errors.processName)}
                    helperText={formik.touched.processName && formik.errors.processName}
                />
                <TextField
                    id="outlined-basic"
                    label="Descripción del proceso"
                    name="processDescription"
                    variant="outlined"
                    style={{ marginBottom: '5%', width: '60%' }}
                    value={formik.values.processDescription}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.processDescription && Boolean(formik.errors.processDescription)}
                    helperText={formik.touched.processDescription && formik.errors.processDescription}
                />
                <TextField
                    id="outlined-basic"
                    label="Numero de actividades"
                    name="numberActivities"
                    variant="outlined"
                    type="number"
                    style={{ marginBottom: '5%', width: '60%' }}
                    value={formik.values.numberActivities}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.numberActivities && Boolean(formik.errors.numberActivities)}
                    helperText={formik.touched.numberActivities && formik.errors.numberActivities}
                />

                <Button variant="contained" type="submit" sx={{ width: '60%' }} onClick={formik.handleSubmit}>
                    Siguiente
                </Button>
            </Box>
        </Box >
    );
}