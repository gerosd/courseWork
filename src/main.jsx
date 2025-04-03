import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contacts from "./pages/contacts/Contacts.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App /> }/>
                <Route path="/contact" element={ <Contacts /> }/>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
