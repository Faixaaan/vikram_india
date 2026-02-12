// import React, { useState } from "react";
// import { Box, Button } from "@mui/material";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// import landvideo from "../../images/landingvideo.mp4"

// const MotionBox = motion(Box);

// export default function Landing() {
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();



//   const handleEnter = () => {
//     setOpen(true);
//     setTimeout(() => {
//       navigate("/home");
//     }, 1200);
//   };

//   return (
//     <Box sx={{ height: "100vh", overflow: "hidden", position: "relative" }}>

//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         style={{
//           position: "absolute",
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//         }}
//         src={landvideo}
//       />


   
//       {/* Logo */}
//       <Box
//         sx={{
//           position: "absolute",
//           top: 30,
//           left: 40,
//           zIndex: 5,
//           px: 3,
//           py: 2,
//           borderRadius: "20px",

//           background: "rgba(255, 255, 255, 0.31)",
//           backdropFilter: "blur(12px)",

//           boxShadow:
//             "0 8px 32px rgba(0,0,0,.35), inset 0 0 20px rgba(255,255,255,.15)",

//           border: "1px solid rgba(255,255,255,.25)",

//           "&:hover": {
//             boxShadow:
//               "0 12px 40px rgba(0,0,0,.45), inset 0 0 25px rgba(255,255,255,.25)",
//             transform: "scale(1.03)",
//           },
//           transition: ".4s ease",

//         }}


//       >
//         <img src="/logo.png" width={280} alt="logo" />
//       </Box>


//       {/* Button */}
//       <Box
//         sx={{
//           position: "absolute",
//           top: 30,
//           right: 40,
//           zIndex: 5,
//         }}
//       >
//         <Box
//           sx={{
//             position: "relative",

//             "::before, ::after": {
//               content: '""',
//               position: "absolute",
//               borderRadius: "50%",
//               filter: "blur(12px)",
//               opacity: 0.6,
//               animation: "float 6s ease-in-out infinite",
//             },

//             "::before": {
//               width: 60,
//               height: 60,
//               background: "#00ffff",
//               top: -20,
//               left: -20,
//             },

//             "::after": {
//               width: 40,
//               height: 40,
//               background: "#ff00ff",
//               bottom: -15,
//               right: -15,
//               animationDelay: "2s",
//             },

//             "@keyframes float": {
//               "0%,100%": { transform: "translateY(0)" },
//               "50%": { transform: "translateY(-20px)" },
//             },
//           }}
//         >
//           {/* extra two balls */}
//           <Box
//             sx={{
//               position: "absolute",
//               width: 25,
//               height: 25,
//               borderRadius: "50%",
//               background: "#ffd86b",
//               top: "50%",
//               left: -10,
//               filter: "blur(8px)",
//               animation: "float2 5s ease-in-out infinite",
//             }}
//           />

//           <Box
//             sx={{
//               position: "absolute",
//               width: 20,
//               height: 20,
//               borderRadius: "50%",
//               background: "#7cf5ff",
//               bottom: -10,
//               left: "40%",
//               filter: "blur(8px)",
//               animation: "float2 7s ease-in-out infinite",
//             }}
//           />

//           <Button
//             variant="contained"
//             onClick={handleEnter}
//             sx={{
//               position: "relative",
//               px: 4,
//               py: 1.5,
//               borderRadius: "30px",

//               background:
//                 "linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))",
//               backdropFilter: "blur(12px)",

//               boxShadow:
//                 "0 8px 30px rgba(0,0,0,.35), inset 0 0 15px rgba(255,255,255,.3)",

//               border: "1px solid rgba(255,255,255,.35)",

//               color: "#ffffff",
//               fontWeight: 600,
//               fontSize: "22px",

//               transition: ".4s ease",

//               "&:hover": {
//                 transform: "scale(1.05)",
//                 boxShadow:
//                   "0 12px 40px rgba(0,0,0,.45), inset 0 0 20px rgba(255,255,255,.4)",
//               },
//             }}
//           >
//             Visit Our Website
//           </Button>
//         </Box>


//       </Box>


//       <AnimatePresence>
//         {open && (
//           <>
//             <MotionBox
//               initial={{ x: 0 }}
//               animate={{ x: "-100%" }}
//               transition={{ duration: 1.2 }}
//               sx={{
//                 position: "absolute",
//                 left: 0,
//                 top: 0,
//                 width: "50%",
//                 height: "100%",
//                 background: "#000",
//                 zIndex: 10,
//               }}
//             />

//             <MotionBox
//               initial={{ x: 0 }}
//               animate={{ x: "100%" }}
//               transition={{ duration: 1.2 }}
//               sx={{
//                 position: "absolute",
//                 right: 0,
//                 top: 0,
//                 width: "50%",
//                 height: "100%",
//                 background: "#000",
//                 zIndex: 10,
//               }}
//             />
//           </>
//         )}
//       </AnimatePresence>
//     </Box>
//   );
// }


import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";


const MotionBox = motion(Box);

export default function Landing() {
  const [open, setOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(true);
  const navigate = useNavigate();
  const landvideo = "https://res.cloudinary.com/deqx8t3wr/video/upload/v1770867858/landingvideo_yt5ypz.mp4";

  const handleEnter = () => {
    // hide video immediately
    setShowVideo(false);

    // start black screen animation
    setOpen(true);

    // navigate after animation completes
    setTimeout(() => {
      navigate("/home");
    }, 1200);
  };

  return (
    <Box sx={{ height: "100vh", overflow: "hidden", position: "relative" }}>
      
      {/* Background Video */}
      {showVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          src={landvideo}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}

      {/* Logo */}
      <Box
        sx={{
          position: "absolute",
          top: 30,
          left: 40,
          zIndex: 5,
          px: 3,
          py: 2,
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.31)",
          backdropFilter: "blur(12px)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,.35), inset 0 0 20px rgba(255,255,255,.15)",
          border: "1px solid rgba(255,255,255,.25)",
          transition: ".4s ease",
          "&:hover": {
            boxShadow:
              "0 12px 40px rgba(0,0,0,.45), inset 0 0 25px rgba(255,255,255,.25)",
            transform: "scale(1.03)",
          },
        }}
      >
        <img src="/logo.png" width={280} alt="logo" />
      </Box>

      {/* Button */}
      <Box
        sx={{
          position: "absolute",
          top: 30,
          right: 40,
          zIndex: 5,
        }}
      >
        <Box
          sx={{
            position: "relative",
            "::before, ::after": {
              content: '""',
              position: "absolute",
              borderRadius: "50%",
              filter: "blur(12px)",
              opacity: 0.6,
              animation: "float 6s ease-in-out infinite",
            },
            "::before": {
              width: 60,
              height: 60,
              background: "#00ffff",
              top: -20,
              left: -20,
            },
            "::after": {
              width: 40,
              height: 40,
              background: "#ff00ff",
              bottom: -15,
              right: -15,
              animationDelay: "2s",
            },
            "@keyframes float": {
              "0%,100%": { transform: "translateY(0)" },
              "50%": { transform: "translateY(-20px)" },
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: 25,
              height: 25,
              borderRadius: "50%",
              background: "#ffd86b",
              top: "50%",
              left: -10,
              filter: "blur(8px)",
              animation: "float2 5s ease-in-out infinite",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: "#7cf5ff",
              bottom: -10,
              left: "40%",
              filter: "blur(8px)",
              animation: "float2 7s ease-in-out infinite",
            }}
          />

          <Button
            variant="contained"
            onClick={handleEnter}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: "30px",
              background:
                "linear-gradient(135deg, rgba(225, 0, 0, 0.95), rgba(182, 5, 5, 0.94))",
              backdropFilter: "blur(12px)",
              boxShadow:
                "0 8px 30px rgba(0,0,0,.35), inset 0 0 15px rgba(255,255,255,.3)",
              border: "1px solid rgba(255,255,255,.35)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "22px",
              transition: ".4s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow:
                  "0 12px 40px rgba(0,0,0,.45), inset 0 0 20px rgba(255,255,255,.4)",
              },
            }}
          >
            Visit Our Website
          </Button>
        </Box>
      </Box>

      {/* Black Split Animation */}
      <AnimatePresence>
        {open && (
          <>
            <MotionBox
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              sx={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "50%",
                height: "100%",
                background: "#000",
                zIndex: 10,
              }}
            />

            <MotionBox
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              sx={{
                position: "absolute",
                right: 0,
                top: 0,
                width: "50%",
                height: "100%",
                background: "#000",
                zIndex: 10,
              }}
            />
          </>
        )}
      </AnimatePresence>
    </Box>
  );
}
