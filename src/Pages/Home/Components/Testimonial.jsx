import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, IconButton, Avatar } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import '../../../App.css'
import avatar1 from '../../../Assets/Ellipse 14.png'
import avatar2 from '../../../Assets/Ellipse 15.png'
import avatar3 from '../../../Assets/Ellipse 16.png'

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample testimonial data with images
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO, Company A",
      country: "United States",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 5,
      image: avatar1 // Replace with actual image paths
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Director, Company B",
      country: "United Kingdom",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      rating: 4,
      image: avatar2
    },
    {
      id: 3,
      name: "Mike Johnson",
      position: "Manager, Company C",
      country: "Canada",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      rating: 5,
      image: avatar3
    },
    {
      id: 4,
      name: "Sarah Wilson",
      position: "CTO, Company D",
      country: "Australia",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 5,
      image: avatar2
    },
    {
      id: 5,
      name: "David Brown",
      position: "Product Manager, Company E",
      country: "Germany",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      rating: 4,
      image:avatar3
    },
    {
      id: 6,
      name: "Emily Davis",
      position: "Marketing Head, Company F",
      country: "France",
      content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
      rating: 5,
      image: avatar1
    },
    {
      id: 7,
      name: "Robert Wilson",
      position: "Operations Head, Company G",
      country: "Japan",
      content: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      rating: 4,
      image: avatar2
    },
    {
      id: 8,
      name: "Lisa Anderson",
      position: "HR Director, Company H",
      country: "Brazil",
      content: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      rating: 5,
      image: avatar3
    }
  ];

  // Responsive cards per view
  const getCardsPerView = () => {
    if (typeof window === 'undefined') return 4;
    const width = window.innerWidth;
    if (width < 600) return 1;    // Mobile: 1 card
    if (width < 960) return 2;    // Tablet: 2 cards
    return 4;                     // Desktop: 4 cards
  };

  const [cardsPerView, setCardsPerView] = useState(4);

  React.useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating) => {
    return (
      <Box sx={{ display: 'flex', gap: 0.5 }}>
        {[...Array(5)].map((_, index) => (
          <Box
            key={index}
            sx={{
              color: index < rating ? '#FFD700' : '#ddd',
              fontSize: { xs: '14px', md: '16px' }
            }}
          >
            ★
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Box sx={{ 
      padding: { xs: "30px 15px", md: "60px 40px" },
      backgroundColor: "#fff",
      position: 'relative'
    }}>
      {/* Section Header */}
      <Typography 
        variant="h2" 
        sx={{ 
          textAlign: 'center',
          fontSize: { xs: "1.75rem", md: "2.5rem" },
          fontWeight: "bold",
          marginBottom: "40px",
          color: "#000",
          fontFamily:"Open Sans"
        }}
      >
        Testimonials
      </Typography>

      {/* Carousel Container */}
      <Box sx={{ position: 'relative', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Navigation Buttons - Hide on mobile when only 1 card */}
        {cardsPerView > 1 && (
          <>
            <IconButton
              onClick={prevSlide}
              sx={{
                position: 'absolute',
                left: { xs: '-5px', sm: '-10px', md: '-40px' },
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'white',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                zIndex: 2,
                '&:hover': {
                  backgroundColor: '#f5f5f5'
                },
                display: { xs: cardsPerView === 1 ? 'none' : 'flex', sm: 'flex' }
              }}
            >
              <ChevronLeft />
            </IconButton>

            <IconButton
              onClick={nextSlide}
              sx={{
                position: 'absolute',
                right: { xs: '-5px', sm: '-10px', md: '-40px' },
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'white',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                zIndex: 2,
                '&:hover': {
                  backgroundColor: '#f5f5f5'
                },
                display: { xs: cardsPerView === 1 ? 'none' : 'flex', sm: 'flex' }
              }}
            >
              <ChevronRight />
            </IconButton>
          </>
        )}

        {/* Carousel Content */}
        <Box sx={{ 
          overflow: 'hidden',
          width: '100%',
          padding: '10px 0'
        }}>
          <Box sx={{
            display: 'flex',
            transition: 'transform 0.5s ease-in-out',
            transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
            width: `${totalSlides * 100}%`
          }}>
            {testimonials.map((testimonial) => (
              <Box 
                key={testimonial.id}
                sx={{ 
                  flex: `0 0 ${100 / (totalSlides * cardsPerView)}%`,
                  padding: { xs: '0 8px', sm: '0 12px', md: '0 15px' },
                  boxSizing: 'border-box'
                }}
              >
                <Card 
                  sx={{ 
                    borderRadius: '12px',
                    backgroundColor:"#0A0A0DD6",
                    padding: { xs: '15px', sm: '20px' },
                    height: { xs: 'auto', sm: '230px' },
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
                    },
                    width:{sm:"230px",xs:"90%"}
                  }}
                >
                  {/* First Section: Left Image + Right Info */}
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: { xs: '12px', sm: '15px' },
                    marginBottom: { xs: '15px', sm: '20px' }
                  }}>
                    {/* Left Side - Image */}
                    <Avatar
                      src={testimonial.image}
                      alt={testimonial.name}
                      sx={{ 
                        width: { xs: 50, sm: 60, md: 70 }, 
                        height: { xs: 50, sm: 60, md: 70 } 
                      }}
                    />

                    {/* Right Side - Name, Country, Ratings */}
                    <Box sx={{ flex: 1 }}>
                      <Typography 
                        variant="h6"
                        sx={{
                          fontWeight: 'bold',
                          color: '#FFFFFF',
                          fontSize: { xs: '14px', sm: '16px', md: '18px' },
                          marginBottom: '4px',
                          fontFamily:"Kaisei Decol"
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                      
                      <Typography 
                        variant="body2"
                        sx={{
                          color: '#fff',
                          fontSize: { xs: '12px', sm: '13px', md: '14px' },
                          marginBottom: '8px',
                          fontFamily:"Kaisei Decol"
                        }}
                      >
                        {testimonial.country}
                      </Typography>
                      
                      {/* Ratings */}
                      {renderStars(testimonial.rating)}
                    </Box>
                  </Box>

                  {/* Second Section: Content */}
                  <CardContent sx={{ 
                    padding: 0, 
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    <Typography 
                      variant="body2"
                      sx={{
                        color: '#fff',
                       
                        lineHeight: { xs: '1.4', sm: '1.6' },
                        display: '-webkit-box',
                        WebkitLineClamp: { xs: 3, sm: 4 },
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        fontSize: { xs: '13px', sm: '14px', md: '15px' },
                        flexGrow: 1,
                        fontFamily:"Kaisei Decol"
                      }}
                    >
                      "{testimonial.content}"
                    </Typography>

                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Dots Indicator */}
        <Box sx={{ 
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '30px'
        }}>
          {[...Array(totalSlides)].map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentIndex(index)}
              sx={{
                width: { xs: '8px', sm: '10px' },
                height: { xs: '8px', sm: '10px' },
                borderRadius: '50%',
                backgroundColor: currentIndex === index ? '#EE1D25' : '#ddd',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonial;