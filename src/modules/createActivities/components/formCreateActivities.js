import React, { useState } from "react";
import { FormControl, TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createProcess } from "../../../api/api";

export const FormCreateActivities = (props) => {
    const location = props.location;
    const navigate = useNavigate();
    const [activityNames, setActivityNames] = useState([]);
    const [fieldErrors, setFieldErrors] = useState(Array(location.state.numberActivities).fill(false));
    const [ciclos, setCiclos] = useState(0);

    const handleActivityNameChange = (index, value) => {
        const updatedActivityNames =  [...activityNames] ;
        updatedActivityNames[index] = { nombre: value, ciclos: ciclos };
        setActivityNames(updatedActivityNames);

        setFieldErrors(prevErrors => {
            const newErrors = [...prevErrors];
            newErrors[index] = value.trim() === '';
            return newErrors;
        });

    };

    const generateTextFields = () => {
        let list_textFields = [];
        for (let i = 0; i < location.state.numberActivities; i++) {
            list_textFields.push(
                <TextField
                    key={i}
                    id="outlined-basic"
                    label={`Actividad ${i + 1}`}
                    variant="outlined"
                    style={{ marginBottom: '5%', width: '60%' }}
                    onChange={(e) => handleActivityNameChange(i, e.target.value)}
                    error={fieldErrors[i]}  // Mostrar error si el campo está vacío
                    helperText={fieldErrors[i] ? 'Este campo es requerido' : ''} // Mensaje de error
                    required
                />
            )
        }

        return list_textFields;
    }

    const handleOnsubmit = async (e) => {

        // Si no hay campos vacíos, continuar con la navegación
        const data = {
            name : location.state.processName,
            description : location.state.processDescription,
            is_done : false,
            activities : activityNames
        }
        
        const response = await createProcess(data);
        console.log(response)
        navigate('/home');
    }

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
            }}
            display='flex'
            justifyContent='center'
            alignItems='center'

        >

            <Box
                sx={{
                    width: '90%',
                    maxWidth: '800px', // Ajusta el ancho máximo según tus necesidades
                    height: '70%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    border: '1px solid #000',
                    padding: '20px',
                    margin: '3%'
                }}
            >
                <FormControl sx={{
                    width: '100%',
                    maxWidth: '800px', // Ajusta el ancho máximo según tus necesidades
                    height: '70%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    padding: '20px',
                }}
                    onSubmit={handleOnsubmit}
                >
                    <TextField
                        id="outlined-basic"
                        label='Numero de ciclos'
                        type="number"
                        style={{ marginBottom: '5%', width: '60%' }}
                        variant="outlined"
                        onChange={(e) => setCiclos(e.target.value)}
                    />
                    {generateTextFields().map((textField, index) => {
                        return textField
                    })}
                    <Button variant="contained" style={{ marginTop: '2%' }} onClick={handleOnsubmit} >
                        Guardar Información
                    </Button>
                </FormControl>
            </Box>
        </Box>
    );
}