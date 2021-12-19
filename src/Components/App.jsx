import React from "react";
import '../styles/global.css';

import Layout from '../Containers/Layout';
import Login from "../Containers/Login";

const App = () => {
    return ( 
        <Layout>
            <Login />
        </Layout>
    );
}
 
export default App;