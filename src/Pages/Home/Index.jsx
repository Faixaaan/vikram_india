import React, { useEffect } from 'react'
import Banner from './Components/Banner'
import Media from './Components/Media'
import Testimonial from './Components/Testimonial'
import Achievmnet from './Components/Achievmnet'
import Initiatives from './Components/Initiatives'
import OurClient from './Components/OurClient'
// import ModuleMounting from './Components/Modulemounting'

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);
  return (
    <>

      <Banner />
      {/* <ModuleMounting /> */}
      <OurClient />
      <Initiatives />
      <Achievmnet />
      <Testimonial />
      <Media />
    </>
  )
}

export default Home
