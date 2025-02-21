import React from "react";
import "../assets/styles/Contact.scss";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Contact() {
  return (
    <div
      id="contact"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        color: "white",
      }}
    >
      <h1>Contact Me</h1>
      <Box
        className="contact-icons"
        style={{ display: "flex", gap: "20px", marginTop: "20px" }}
      >
        <IconButton
          component="a"
          href="mailto:mahabmithun@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <EmailIcon fontSize="large" />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/mithun-m-31037b24a/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.instagram.com/imithunxd/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <InstagramIcon fontSize="large" />
        </IconButton>
      </Box>
    </div>
  );
}

export default Contact;
