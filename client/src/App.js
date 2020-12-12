import React from 'react';
import ShowList from './components/ShowList';
import ProductDetiles from './components/ProductDetiles';
import EditProduct from './components/EditProduct';
import 'bootstrap/dist/css/bootstrap.css';
import { Router } from '@reach/router';



function App() {
    return (  
        <div className="App">
            {/* <AddProduct /> */}
            {/* <ShowList /> */}
            <Router>
                {/* <AddProduct path="/AddProductes" /> */}
                <ShowList path="/" />
                <ProductDetiles path="/view/:_id" />
                <EditProduct path="/edit/:_id" />
            </Router>
        </div>
    );
}

export default App;
