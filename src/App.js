import './App.css';
import Navbar from './Layout/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './Pages/Home/Index';
import Footer from './Layout/Footer/Footer';
import Withering from './Layout/Navbar/Dropdown/Withering';
import Rolling from './Layout/Navbar/Dropdown/Rolling';
import Fermenting from './Layout/Navbar/Dropdown/Fermenting';
import Drying from './Layout/Navbar/Dropdown/Drying';
import Sorting from './Layout/Navbar/Dropdown/Sorting';
import Packing from './Layout/Navbar/Dropdown/Packing';
import Utilities from './Layout/Navbar/Dropdown/Utilities';
import PageComing from './Pages/ComingSoon/PageComing';
import Quality from './Layout/Navbar/Dropdown/Quality';
import Workshop from './Layout/Navbar/Dropdown/Workshop';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/ctc/withering" element={<Withering />} />
        <Route path="/products/ctc/Rolling" element={<Rolling />} />
        <Route path="/products/ctc/Fermenting" element={<Fermenting />} />
        <Route path="/products/ctc/drying" element={<Drying />} />
        <Route path="/products/ctc/sorting" element={<Sorting />} />
        <Route path="/products/ctc/packing" element={<Packing />} />
        <Route path="/products/ctc/utilities" element={<Utilities />} />
        <Route path="/products/ctc/quality-control-equipment" element={<Quality />} />
        <Route path="/products/ctc/workshop-equipment" element={<Workshop />} />
        <Route path="/page-coming-soon" element={<PageComing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
