import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contacts from "./pages/contacts/Contacts.jsx";
import Catalog from "./pages/catalog/Catalog.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Vacancies from "./pages/vacancies/Vacancies.jsx";
import Profile from "./pages/profile/Profile.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/contact" element={<Contacts/>}/>
                <Route path="/catalog" element={<Catalog/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/vacancies" element={<Vacancies/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
