import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../modules/home/page";
import { Process } from "../modules/process/page";
import { NewProcess } from "../modules/newProcess/page";
import { CreateActivities } from "../modules/createActivities/page";

export const MainRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/newProcess" element={<NewProcess />} />
                <Route path="/createActivities" element={<CreateActivities />} />
                <Route path="/process/:id" element={<Process />} />
            </Routes>
        </BrowserRouter>
    );
}


