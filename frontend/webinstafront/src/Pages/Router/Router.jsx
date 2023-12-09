import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import HomePage from "../HomePage/HomePage";
import {Route, Routes} from "react-router-dom";

const Router = () => {
    return (
        <div>
            <div className='flex'>
                <div>
                    <Sidebar/>
                </div>
                <div>
                    <Routes>
                        <Route path='/' element={<HomePage/>}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Router