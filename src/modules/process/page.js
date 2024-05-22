import React, { useEffect, useState } from "react";

import { AppBarProcess } from "./components/appBarProcess";
import { TableProcess } from "./components/table";
import { getProcesses } from "../../api/api";

import { FormProcess } from "./components/formProcess";

export const Process = (props) => {

    const [state, setState] = useState(1);

    return (
        <>
            <AppBarProcess />
            {
                state === 1 ? <FormProcess /> :< TableProcess />
            }
        </>
    )
}