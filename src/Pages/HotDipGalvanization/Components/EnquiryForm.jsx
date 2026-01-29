import * as React from "react";
import {
  Box,
  Typography,
  Modal,
  TextField,
  Grid,
  Button,
} from "@mui/material";
import "../../../App.css"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: 500, md: 600 },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: { xs: 2, sm: 4 },
  borderRadius: 2,
};

const EnquiryForm = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography
          variant="h6"
          sx={{ mb: 2, fontWeight: 600, textAlign: "center",fontSize:"28px",fontFamily:"Roboto" }}
        >
         HDG Enquiry Form
        </Typography>

        <Grid container spacing={2}>
          {/* Name */}
          <Grid item size={{xs:12}}>
            <TextField fullWidth label="Name" size="small" />
          </Grid>

          {/* Company */}
          <Grid item  size={{xs:12,sm:6}}>
            <TextField fullWidth label="Company Name" size="small" />
          </Grid>

          {/* Type of Material */}
          <Grid item  size={{xs:12,sm:6}}>
            <TextField fullWidth label="Type of Material" size="small" />
          </Grid>

          {/* Total Tonnage */}
          <Grid item  size={{xs:12,sm:6}}>
            <TextField
              fullWidth
              label="Total Tonnage"
              size="small"
              type="number"
            />
          </Grid>

          {/* Contact Person */}
          <Grid item size={{xs:12,sm:6}}>
            <TextField fullWidth label="Contact Person Name" size="small" />
          </Grid>

          {/* Email */}
          <Grid item size={{xs:12,sm:6}}>
            <TextField
              fullWidth
              label="Email ID"
              size="small"
              type="email"
            />
          </Grid>

          {/* Contact Number */}
          <Grid item  size={{xs:12,sm:6}}>
            <TextField
              fullWidth
              label="Contact Number"
              size="small"
              type="tel"
            />
          </Grid>

          {/* Buttons */}
          <Grid item size={{xs:12}}>
            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 1 }}
            >
              Submit Enquiry
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default EnquiryForm;
