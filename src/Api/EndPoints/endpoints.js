import Introduction from "../../Pages/Components/Mms";

export const endpoints = {
  Banner: {
    getBanner: '/home-banners',
    getBannerCarsousel: "home-sec-one"
  },
  Career: {
    getCarrers: "/career-content",
    cmsCareerData:"/page/career"
  },
  Csr: {
    getCsrData: "/csr-content",
    cmsCsrData:"/page/csr"
  },
  ModuleMounting: {
    getModuleMountingManufaturing: "/module-mounting-manufacturing-image",
    getHighTensile: "/module-mounting-high-tensile-image",
    getProductData: "module-mounting-product-image",
    Introduction:"/page/module_mounting_introduction",
    CmsModuleMounting:"/page/module_mounting_manufacturing",
    solarPumps:"/page/module_mounting_solar_pump",
    products:"/page/module_mounting_product",
    quality_safety:"/page/module_mounting_quality_safety",
    technical_specification:"/page/module_mounting_technical",
    product_portfolio:"/page/module_mounting_product_profile",
    infrastrutre_machinery:"/page/module_mounting_infrastructure",
    module_mounting_introduction:"/page/module_mounting_introduction"
  },
  
  Media: {
    getMediaDownload: "/media-downloads",
    galleryCategory: "/media-gallery-categories",
    cmsMedia:"/page/media"
  },
  HomeCms: {
    getHomeCms: "/page/home",
    client:"/our-client"
  },
  AboutUs: {
    getBlockData: "/blog",
    groupPofile:"/page/about_group_profile",
    companyProfile:"/page/about_company_profile",
    our_vision:"/page/about_vision",
    ManagmentTeamData: "/management",
    clientImage: "about-client-image",
    getAwardRecognition: "/about-award-image",
    getAwardRecognitionCmsData: "/about-award-image-category",
    research:"page/about_rnd",
    qualityPolicy:"page/about_quality_policy",
    clientele:"page/about_clientele"
  },
  contactUs: {
    getContactUsData: "/contact-address",
    cmsContact:"/page/contact"
  },
  homeMedia: {
    getHomeMediaData: "/home-media"
  },
  Blog: {
    getBlogData: "/blog-details"
  },
  Testimonials:{
    getTestimonialsData:"/testimonial"
  },
  facilities:{
     getFacilitiesData:"/page/facilities"
  },
  teaProcessingMachinery:{
    drying:"/page/ctc_tea_processing_drying",
    withering:"/page/ctc_tea_processing_withering",
    rolling:"/page/ctc_tea_processing_rolling",
    quality:"/page/ctc_tea_processing_quality"
  }



}