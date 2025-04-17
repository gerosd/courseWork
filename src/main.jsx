import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import Index from './index.jsx';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contacts from "./pages/contacts/Contacts.jsx";
import Catalog from "./pages/catalog/Catalog.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Vacancies from "./pages/vacancies/Vacancies.jsx";
import Profile from "./pages/profile/Profile.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import {ProductsProvider} from "./assets/js/ProductsContext.jsx";
import {Provider} from "react-redux";
import {store} from './assets/js/Store.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ProductsProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/courseWork" element={<Index/>}/>
                        <Route path="/courseWork/contact" element={<Contacts/>}/>
                        <Route path="/courseWork/catalog" element={<Catalog/>}/>
                        <Route path="/courseWork/cart" element={<Cart/>}/>
                        <Route path="/courseWork/vacancies" element={<Vacancies/>}/>
                        <Route path="/courseWork/profile" element={<Profile/>}/>
                        <Route path="*" element={<PageNotFound/>}/>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </ProductsProvider>
    </StrictMode>,
)
