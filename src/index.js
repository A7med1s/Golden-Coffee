import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from "./reportWebVitals"
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './my-tailwind.css'
import {Provider} from "react-redux"
import { myStore } from './rtk/store';


const root = ReactDOM.createRoot(document.getElementById('root'));


  reportWebVitals(root.render(
    <React.StrictMode>
        <Provider store={myStore}> 
        <App/>
        </Provider>
    </React.StrictMode>
    ));
