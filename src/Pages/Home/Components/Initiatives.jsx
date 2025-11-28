import React from 'react'
import { Box, Typography } from '@mui/material'

// Import your images
import BackgroundLeft from '../../../Assets/left-side-int.png'
import BackgroundRight from '../../../Assets/right-side-int.png'
import CenterLogo from '../../../Assets/eye 1.png'
import centerlogoLeft from '../../../Assets/left-card.png'

const Initiatives = () => {
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
            backgroundImage: `url(${BackgroundLeft})`,
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
              src={centerlogoLeft} 
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
              Left Initiative
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
              This is the content for the left side initiative. It describes the purpose and goals of this particular program.
            </Typography>
          </Box>
        </Box>
        
        {/* Right Card with Logo and Content */}
        <Box
          sx={{
            width: '50%',
            height: '450px',
            backgroundImage: `url(${BackgroundRight})`,
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
              src={CenterLogo} 
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
              Right Initiative
            </Typography>
            <Typography 
              variant="body1"
              sx={{
                fontSize: { xs: '0.9rem', md: '18px' },
               
                fontFamily: 'Open Sans',
                lineHeight: 1.6
              }}
            >
              This is the content for the right side initiative. It explains the objectives and outcomes of this specific program.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Initiatives