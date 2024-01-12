import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Twitter, Instagram } from "@mui/icons-material";


const Footer = () => {
  const resStyles = {
    padding: "25px",
    textAlign: "center",
  };

  const iconStyles = {
    verticalAlign: "middle",
    marginRight: "8px",
  };

  const socialMediaLinks = {
    linkedin: "https://www.linkedin.com/in/arihantdotcom/",
    twitter: "https://twitter.com/Arihantdotcom",
    instagram: "https://www.instagram.com/arihantjainn17/",
  };

  return (
    <Grid
      container
      className="text-center mt-10"
      sx={{ bgcolor: "#eaeaea", color: "black", py: 3 }}
      spacing={2}
    >
      
      <Grid item xs={12} sm={6} md={3} lg={3} sx={resStyles}>
      <Typography component="div" className="pb-3 cursor-pointer" variant="h5">
          Jaincloths
        </Typography>
        <Button component="div" className="pb-3 cursor-pointer" variant="h6">
          About
        </Button>
        <Button component="div" className="pb-3 cursor-pointer" variant="h6">
          Blog
        </Button>
        <Button component="div" className="pb-3 cursor-pointer" variant="h6">
          Jobs
        </Button>
        <Button component="div" className="pb-3 cursor-pointer" variant="h6">
          Press
        </Button>
        <Button component="div" className="pb-3 cursor-pointer" variant="h6">
          Partners
        </Button>
      </Grid>

      <Grid item xs={12} sm={6} md={3} lg={3} sx={resStyles}>
        <Typography component="div" className="pb-3 cursor-pointer" variant="h5">
          Solutions
        </Typography>
        <Button component="div" className="pb-3 cursor-pointer" variant="h6">
          Marketing
        </Button>
        <Button component="div" className="pb-3 cursor-pointer" variant="h6">
          Analytics
        </Button>
        <Button component="div" className="pb-3 cursor-pointer" variant="h6">
          Insights
        </Button>
        <Button component="div" className="pb-3 cursor-pointer" variant="h6">
          Support
        </Button>
      </Grid>

      <Grid item xs={12} sm={6} md={3} lg={3} sx={resStyles}>
        <Typography component="div" className="pb-3 cursor-pointer" variant="h5">
          Social Media
        </Typography>
        <a
          href={socialMediaLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="pb-3 cursor-pointer" variant="h6">
            <LinkedInIcon sx={iconStyles} /> Linkedin
          </Button>
        </a>
        <a
          href={socialMediaLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="pb-3 cursor-pointer" variant="h6">
            <Twitter sx={iconStyles} /> Twitter
          </Button>
        </a>
        <a
          href={socialMediaLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="pb-3 cursor-pointer" variant="h6">
            <Instagram sx={iconStyles} /> Instagram
          </Button>
        </a>
      </Grid>

      <Grid item xs={12} sm={6} md={3} lg={3} sx={resStyles}>
        <Typography component="div" className="pb-3 cursor-pointer" variant="h5">
          Legal
        </Typography>
        <Button component="div" className="pb-3 cursor-pointer" variant="h6">
          Claim
        </Button>
        <Button component="div" className="pb-3 cursor-pointer" variant="h6">
          Privacy
        </Button>
        <Button component="div" className="pb-3 cursor-pointer" variant="h6">
          Terms
        </Button>
        <Button component="div" className="pb-3 cursor-pointer" variant="h6">
          Press
        </Button>
      </Grid>
      <Grid item xs={12} sx={resStyles}>
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} Jaincloths. All rights reserved.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
