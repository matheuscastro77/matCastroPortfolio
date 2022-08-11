import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/1Home/Home';



const RoutesApp = () => {

    return (

        <BrowserRouter>
            <Routes>
            <Route path="/" element ={<Home />} />
{/*             <Route path="/sobre" element ={<About />} />
            <Route path="/habilidades" element ={<Abilitys />} />
            <Route path="/projetos" element ={<Project />} />
            <Route path="/contato" element ={<Contact />} /> */}
            </Routes>
        </BrowserRouter>
    )
    
}

export default RoutesApp