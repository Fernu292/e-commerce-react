import React from "react";
import '../styles/global.css';
import {
    BrowserRouter,
    Routes,
    Route }
from 'react-router-dom';

import Layout from '../Containers/Layout';
import Login from "../Containers/Login";
import CreatePassword from '../Containers/CreatePassword';
import RecoveryPassword from '../Containers/RecoveryPassword';
import Home from "../Pages/Home";
import NotFound from '../Pages/NotFound';
import CreateAccount from "../Containers/CreateAccount";

const App = () => {
    return ( 
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/create-account' element={<CreateAccount />} />
                    <Route exact path='recovery-password' element={<CreatePassword />} />
                    <Route exact path='/email-sent' element={<RecoveryPassword />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>   
            </Layout>

        </BrowserRouter>
        
    );
}
 
export default App;