import { Breadcrumbs, Typography, Link as MLink } from "@mui/material";
import { Link } from "react-router-dom";

 export const  DynamicBreadcrumb = ({ crumbs }) => (
  <Breadcrumbs sx={{ mb: 2, fontSize: "14px" }}>
    {crumbs.map((item, i) =>
      item === "Home" ? (
        <MLink key={i} component={Link} to="/" underline="hover" color="inherit">
          {item}
        </MLink>
      ) : (
        <Typography key={i} color="text.primary">{item}</Typography>
      )
    )}
  </Breadcrumbs>
);
