import './App.css';
import Navbar from './Layout/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './Pages/Home/Index';
import Footer from './Layout/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
