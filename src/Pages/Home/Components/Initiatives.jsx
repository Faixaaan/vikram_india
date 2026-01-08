import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'

// Import your images
import BackgroundLeft from '../../../Assets/left-side-int.png'
import BackgroundRight from '../../../Assets/right-side-int.png'
import CenterLogo from '../../../Assets/eye 1.png'
import centerlogoLeft from '../../../Assets/left-card.png'
import { axiosInstance } from '../../../Api/Axios/axios'
import { endpoints } from '../../../Api/EndPoints/endpoints'

const Initiatives = () => {
   
  const [data,setdata] = useState([]);

  const fetchData = async () =>{
     try{
        const res = await axiosInstance.get(endpoints.HomeCms.getHomeCms);
        console.log(res?.data?.data,'cmsHome')
        setdata(res?.data?.data)
     }
     catch(err){
        console.log(err)
     }
  }

  useEffect(()=>{
    fetchData()
  },[])



  return (
    <>
      <Box sx={{ 
        width: '100%', 
        minHeight: '400px',
        display: 'flex'
      }}>
        {/* Left Card with Logo and Content */}
        <Box
          sx={{
            width: '50%',
            height: '450px',
            backgroundImage: `url(${data?.sec3left_bg_img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            
          }}
        >
          {/* Logo */}
          <Box sx={{
            position: 'relative',
            zIndex: 1,
            marginBottom: 3,
            width:"100px",
            height:"100px",
            backgroundColor:"#fff",
            borderRadius:"50%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}>
            <img 
              src={data?.sec3left_icon_img} 
              alt="Logo" 
              style={{
                width: '70px',
                height: '70px'
              }}
            />
          </Box>

          {/* Content */}
          <Box sx={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            color: '#000',
            width: '80%',
            maxWidth: '400px'
          }}>
            <Typography 
              variant="h3"
              sx={{
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 'bold',
                marginBottom: 2,
                color:"#000",
                fontFamily: 'Open Sans'
              }}
            >
              {data?.sec3left_title}
            </Typography>
            <Typography 
              variant="body1"
              sx={{
                fontSize: { xs: '0.9rem', md: '18px' },
                
                fontFamily: 'Open Sans',
                lineHeight: 1.6,
                color:"#000"
              }}
            >
             {data?.sec3left_description}
            </Typography>
          </Box>
        </Box>
        
        {/* Right Card with Logo and Content */}
        <Box
          sx={{
            width: '50%',
            height: '450px',
            backgroundImage: `url(${data?.sec3right_bg_img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
           
          }}
        >
          {/* Logo */}
          <Box sx={{
            position: 'relative',
            zIndex: 1,
            marginBottom: 3,
            width:"100px",
            height:"100px",
            backgroundColor:"#fff",
            borderRadius:"50%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}>
            <img 
              src={data?.sec3right_icon_img} 
              alt="Logo" 
              style={{
                width: '60px',
                height: '60px'
              }}
            />
          </Box>

          {/* Content */}
          <Box sx={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            color: '#000',
            width: '80%',
            maxWidth: '400px'
          }}>
            <Typography 
              variant="h3"
              sx={{
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 'bold',
                marginBottom: 2,
               
                fontFamily: 'Open Sans, sans-serif'
              }}
            >
              {data?.sec3right_title}
            </Typography>
            <Typography 
              variant="body1"
              sx={{
                fontSize: { xs: '0.9rem', md: '18px' },
               
                fontFamily: 'Open Sans',
                lineHeight: 1.6
              }}
            >
              {data?.sec3right_description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Initiatives