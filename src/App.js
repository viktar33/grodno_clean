import './App.css';
import Header from "./layout/header/Header";
import HomePage from "./components/homePage/HomePage";
import Footer from "./layout/footer/Footer";
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Services from "./components/service/Services";
import ContactUs from "./components/contactUs/ContactUs";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/homePage"/>}/>
                    <Route path="/homePage" element={<HomePage/>}/>
                    <Route path="/homePage" element={<HomePage/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/contactUs" element={<ContactUs/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </>
    );
}

export default App;
