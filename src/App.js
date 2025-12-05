import './App.css';
import Navbar from './Layout/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './Pages/Home/Index';
import Footer from './Layout/Footer/Footer';
import Withering from './Layout/Navbar/Dropdown/Withering';
import Rolling from './Layout/Navbar/Dropdown/Rolling';
import Fermenting from './Layout/Navbar/Dropdown/Fermenting';
import PageComing from './Pages/ComingSoon/PageComing';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/ctc/withering" element={<Withering />} />
         <Route path="/products/ctc/Rolling" element={<Rolling />} />
         <Route path="/products/ctc/Fermenting" element={<Fermenting />} />
         <Route path="/page-coming-soon" element={<PageComing />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
