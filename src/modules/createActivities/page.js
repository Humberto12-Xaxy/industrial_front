import React from "react";
import { useLocation } from "react-router-dom";
import { FormCreateActivities } from "./components/formCreateActivities";
import { AppBarActivities } from "./components/appBarAcitivities";

export const CreateActivities = () => {
    const location = useLocation();
    return (
        <>
            <AppBarActivities />
            <FormCreateActivities location={location} />
        </>
    );
}