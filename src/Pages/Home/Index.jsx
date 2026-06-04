import React, { useEffect } from 'react'
import Banner from './Components/Banner'
import Media from './Components/Media'
import Testimonial from './Components/Testimonial'
import Achievmnet from './Components/Achievmnet'
import Initiatives from './Components/Initiatives'
import OurClient from './Components/OurClient'
import { useLocation } from 'react-router-dom'
import AcoustoScan from '../Acoustoscan/AcoustoScan'
// import ModuleMounting from './Components/Modulemounting'

const Home = () => {

  const location = useLocation();

useEffect(() => {
  if (location.state?.scrollTo === "media") {
    setTimeout(() => {
      const section = document.getElementById("media-section");

      if (section) {
        const yOffset = -90; // 🔥 adjust based on navbar height
        const y =
          section.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    }, 400);
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}, [location]);

  return (
    <>

      <Banner />
      {/* <ModuleMounting /> */}
      {/* <OurClient /> */}
      <AcoustoScan />
      <Initiatives />
      {/* <Achievmnet /> */}
      <Testimonial />
      <Media />
    </>
  )
}

export default Home
