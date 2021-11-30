import Header from './components/Header.js'
import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.js'
import Etape1 from './pages/Etape1.js'
import Etape2 from './pages/Etape2.js'
import Comparatif from './pages/Comparatif.js';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/comparatif" element={<Comparatif />} />
                <Route path="/assistant/etape-1" element={<Etape1 />} />
                <Route path="/assistant/etape-2" element={<Etape2 />} />
            </Routes>
        </>
    );
}

export default App;
