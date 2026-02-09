import "././App.css";
import Navbar from "./Layout/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Index";
import Footer from "./Layout/Footer/Footer";
import Withering from "./Layout/Navbar/Dropdown/Withering";
import Rolling from "./Layout/Navbar/Dropdown/Rolling";
import Fermenting from "./Layout/Navbar/Dropdown/Fermenting";
import Drying from "./Layout/Navbar/Dropdown/Drying";
import Sorting from "./Layout/Navbar/Dropdown/Sorting";
import Packing from "./Layout/Navbar/Dropdown/Packing";
import Utilities from "./Layout/Navbar/Dropdown/Utilities";
import PageComing from "./Pages/ComingSoon/PageComing";
import Quality from "./Layout/Navbar/Dropdown/Quality";
import Workshop from "./Layout/Navbar/Dropdown/Workshop";
import Introduction from "./Pages/Components/Mms";
import Manufacturing from "./Pages/Components/Manufacturing";
import HighTensile from "./Pages/Components/HighTensile";
import SolarPumps from "./Pages/Components/SolarPumps";
import Product from "./Pages/Components/Product";
import ProcessingCard from "./Pages/TeaProcessingCard/Index";
import { useEffect } from "react";
import GroupProfile from "./Pages/AboutUs/Profile";
import CompanyProfile from "./Pages/AboutUs/CompanyProfile";
import VisionMission from "./Pages/AboutUs/VisionMission";
import ManagementTeam from "./Pages/AboutUs/ManagmentTeam";
import AwardRecognition from "./Pages/AboutUs/AwardRecognition";
import Testimonials from "./Pages/AboutUs/Testimonials";
import Clientele from "./Pages/AboutUs/Clientele";
import QualityPolicy from "./Pages/AboutUs/QualityPolicy";
import Research from "./Pages/AboutUs/Research";
import Facilities from "./Pages/Facilities/Facilities";
import Adresses from "./Pages/ContactUs/Addresses";
import QueryForm from "./Pages/ContactUs/QueryForm";
import WorkingCareer from "./Pages/Carreers/Working.career";
import ApplyOnline from "./Pages/Carreers/ApplyOnline";
import Blog from "./Pages/Blog/Blog";
import BlogDetail from "./Pages/Blog/BlogDetails";
import News from "./Pages/Media/News";
import Gallery from "./Pages/Media/Gallery";
import Download from "./Pages/Media/Donwload";
import CSR from "./Pages/Csr/Csr";
import TeaWithering from "./Pages/OrthodoxTeaProcessing/TeaWithering";
import TeaRolling from "./Pages/OrthodoxTeaProcessing/TeaRolling";
import TeaFermenting from "./Pages/OrthodoxTeaProcessing/TeaFermenting";
import TeaDrying from "./Pages/OrthodoxTeaProcessing/TeaDrying";
import TeaSorting from "./Pages/OrthodoxTeaProcessing/TeaSorting";
import TeaPacking from "./Pages/OrthodoxTeaProcessing/TeaPacking";
import GreenSteaming from "./Pages/GreenTeaprocessing/GreenSteaming";
import GreenPacking from "./Pages/GreenTeaprocessing/GreenPacking";
import GreenSorting from "./Pages/GreenTeaprocessing/GreenSorting";
import GreenDrying from "./Pages/GreenTeaprocessing/GreenDrying";
import Harvesting from "./Pages/GardenPlantMachienry/Harvesting";
import Foreign from "./Pages/GardenPlantMachienry/Foreign";
import Plucking from "./Pages/GardenPlantMachienry/Plucking";
import TeaIngredient from "./Pages/GardenPlantMachienry/TeaIngredient";
import GreenRolling from "./Pages/GreenTeaprocessing/TeaProcessingRolling";
import HotDip from "./Pages/HotDipGalvanization/HotDip";
import MmsLearnMore from "./Pages/MmsLearnMore/MmsLearnMore";
import ProductsLayout from "./Pages/Components/ProductLayout";
import HdpLearnMore from "./Pages/HotDipGalvanization/HotDip";
import HotDipIntroduction from "./Pages/HotDipGalvanization/Components/introduction";
import ServiceCapabilities from "./Pages/HotDipGalvanization/Components/ServiceCapabilities";
import TechnicalSpecification from "./Pages/HotDipGalvanization/Components/TechnicalSpecification";
import GalvanizingProcess from "./Pages/HotDipGalvanization/Components/GalvanizingProcess";
import QualityAssurance from "./Pages/HotDipGalvanization/Components/QualityAssurance";
import WhyChooseVikramIndia from "./Pages/HotDipGalvanization/Components/WhyChooseVikram";
import ProfileAvailability from "./Pages/Components/ProfileAvailability";


function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
        <Route path="/products/ctc/teawithering" element={<TeaWithering />} />
        <Route path="/products/ctc/tearolling" element={<TeaRolling />} />
        <Route path="/products/ctc/teafermenting" element={<TeaFermenting />} />
        <Route path="/products/ctc/teadrying" element={<TeaDrying />} />
        <Route path="/products/ctc/teasorting" element={<TeaSorting />} />
        <Route path="/products/ctc/teapacking" element={<TeaPacking />} />
        <Route path="/products/ctc/greensteaming" element={<GreenSteaming />} />
        <Route path="/products/ctc/greenpacking" element={<GreenPacking />} />
        <Route path="/products/ctc/greensorting" element={<GreenSorting />} />
        <Route path="/products/ctc/greendrying" element={<GreenDrying />} />
        <Route path="/products/ctc/greenrolling" element={<GreenRolling />} />
        <Route path="/products/ctc/harvesting" element={<Harvesting />} />
        <Route path="/products/ctc/foreign-object-remover" element={<Foreign />} />
        <Route path="/products/ctc/plucking-machine" element={<Plucking />} />
        <Route path="/products/ctc/tea-ingredients--analyzer" element={<TeaIngredient />} />
        <Route
          path="/products/ctc/quality-control-equipment"
          element={<Quality />}
        />
        <Route path="/products/ctc/workshop-equipment" element={<Workshop />} />
        <Route path="/products/mms/infrastructure-&-machinery" element={<Introduction />} />
        <Route
          path="/products/mms/product-&-portfolio"
          element={<Manufacturing />}
        />
        <Route
          path="/products/mms/profile-availability"
          element={<ProfileAvailability />}
        />
        <Route
          path="/products/mms/technical-specification"
          element={<HighTensile />}
        />
        <Route path="/products/mms/quality-&-safety" element={<Product />} />


        <Route path="/products/processing-card" element={<ProcessingCard />} />
        <Route path="/about/group-profile" element={<GroupProfile />} />
        <Route path="/about/company-profile" element={<CompanyProfile />} />
        <Route path="/about/vision-&-mission" element={<VisionMission />} />
        <Route path="/about/management-team" element={<ManagementTeam />} />
        <Route
          path="/about/award-and-recognition"
          element={<AwardRecognition />}
        />

        <Route path="/about/clientele" element={<Clientele />} />
        <Route path="/about/quality-policy" element={<QualityPolicy />} />
        <Route path="/about/research-and-development" element={<Research />} />
        <Route path="/page-coming-soon" element={<PageComing />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/contact/addresses" element={<Adresses />} />
        <Route path="/contact/query-form" element={<QueryForm />} />
        <Route path="/careers/working-with-us" element={<WorkingCareer />} />
        <Route path="/careers/apply-now" element={<ApplyOnline />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/blog-detail/:slug" element={<BlogDetail />} />
        <Route path="/media/news" element={<News />} />
        <Route path="/media/photo-gallery" element={<Gallery />} />
        <Route path="/media/download" element={<Download />} />
        <Route path="/csr" element={<CSR />} />
        <Route path="/products/hot-dip" element={<HotDip />} />
        <Route path="/products/mms-learnMore" element={<MmsLearnMore />} />
        <Route path="/products/hdp-learnMore" element={<HdpLearnMore />} />
        <Route path="/products/introduction" element={<HotDipIntroduction />} />
        <Route path="/products/service-capabilities" element={<ServiceCapabilities />} />
        <Route path="/products/technical-specification-&-infrastructure" element={<TechnicalSpecification />} />
        <Route path="/products/the-galvanizing-process" element={<GalvanizingProcess />} />
        <Route path="/products/quality-assurance-&-lab-facilities" element={<QualityAssurance />} />
        <Route path="/products/why-choose-us" element={<WhyChooseVikramIndia />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
