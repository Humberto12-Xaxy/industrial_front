import React from "react";
import { FormNewProcess } from "./components/formNewProcess";
import { AppBarCreateProcess } from "./components/appBarCreateProcess";

export const NewProcess = () => {

    return (
        <>
            <AppBarCreateProcess />
            <FormNewProcess />
        </>
    );
}