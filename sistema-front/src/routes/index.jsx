import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import Error from "../pages/Error";
import Header from "../componentes/Header";
import Footer  from "../componentes/Footer";
import Imobi from "../pages/Imobi";

const RouterApp = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/imovel" element={<Imobi />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default RouterApp;