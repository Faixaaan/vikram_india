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
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import { axiosInstance } from "../../../Api/Axios/axios";
import { endpoints } from "../../../Api/EndPoints/endpoints";
import { useNavigate } from "react-router-dom";

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
  const currencies = [
    {
      value: 'Tea Procesing Machienry',
      label: 'Tea Procesing Machienry',
    },
    {
      value: 'Hot Dip Galvanization',
      label: 'Hot Dip Galvanization',
    },
    {
      value: 'Module Mounting Structure',
      label: 'Module Mounting Structure',
    },

  ];

  const [formData, setFormData] = useState({
    company_name: "",
    meterial: "",
    tonnage: "",
    type: "",
    name: "",
    email: "",
    number: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // error clear
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    try {
      const res = await axiosInstance.post(
        endpoints.enqueryForm.submitenqueryForm,
        formData
      );

      // ✅ redirect with form name
    navigate("/thankyou-page", {
      state: { formType: "Enquiry Form" },
    });

      // reset form
      setFormData({
        company_name: "",
        meterial: "",
        tonnage: "",
        type: "",
        name: "",
        email: "",
        number: "",
      });

      onClose(); // modal close

    } catch (err) {
      console.log(err);

      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors); // 🔥 important
      } else {
        alert(err.response?.data?.message || "Something went wrong");
      }
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style} component="form" onSubmit={handleSubmit}>
        <Typography
          variant="h6"
          sx={{ mb: 2, fontWeight: 600, textAlign: "center", fontSize: "28px", fontFamily: "Roboto" }}
        >
          Enquiry Form
        </Typography>

        <Grid container spacing={2}>
          {/* Name */}
          <Grid item size={{ xs: 12 }}>
            <TextField fullWidth label="Name"
              size="small"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name?.[0]}
            />
          </Grid>

          {/* Company */}
          <Grid item size={{ xs: 12, sm: 6 }}>
            <TextField fullWidth label="Company Name" name="company_name"
              value={formData.company_name}
              onChange={handleChange}
              size="small"
              error={!!errors.company_name}
              helperText={errors.company_name?.[0]} />
          </Grid>

          {/* Type of Material */}
          <Grid item size={{ xs: 12, sm: 6 }}>
            <TextField fullWidth label="Type of Material" name="meterial"
              value={formData.meterial}
              onChange={handleChange}
              size="small"
              error={!!errors.meterial}
              helperText={errors.meterial?.[0]} />
          </Grid>

          {/* Total Tonnage */}
          <Grid item size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label="Total Tonnage"
              name="tonnage"
              value={formData.tonnage}
              onChange={handleChange}
              size="small"
              type="number"
              error={!!errors.tonnage}
              helperText={errors.tonnage?.[0]}
            />
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              select
              label="Select Type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              size="small"
              error={!!errors.type}
              helperText={errors.type?.[0]}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          {/* Contact Person */}
          <Grid item size={{ xs: 12, sm: 12 }}>
            <TextField fullWidth label="Contact Person Name" name="name"
              value={formData.name}
              onChange={handleChange}
              size="small"
              error={!!errors.name}
              helperText={errors.name?.[0]} />
          </Grid>

          {/* Email */}
          <Grid item size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label="Email ID"
              name="email"
              value={formData.email}
              onChange={handleChange}
              size="small"
              type="email"
              error={!!errors.email}
              helperText={errors.email?.[0]}
            />
          </Grid>

          {/* Contact Number */}
          <Grid item size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label="Contact Number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              size="small"
              type="tel"
              error={!!errors.number}
              helperText={errors.number?.[0]}
            />
          </Grid>

          {/* Buttons */}
          <Grid item size={{ xs: 12 }}>
            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 1 }}
              type="submit"
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
