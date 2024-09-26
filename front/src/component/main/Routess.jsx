import { Route, Routes } from "react-router-dom";
import About from "../main/About";
import Contact from "./Contact";
import Home from "./Home";
import Gallery from "./Gallery";
import Services from "./Services";
import Testomonials from "./Testomonials";
import BeforeAfter from "./BeforeAfter";

const Routess = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testomonials" element={<Testomonials />} />
            <Route path="/result" element={<BeforeAfter />} />

            <Route path="*" element={<h1 className="text-center font-bold text-3xl py-24 text-red-500 flex  align-center justify-center">page not found</h1>} />
        </Routes>
    );
};

export default Routess;