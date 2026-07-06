import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/chiragsahu" },
    { icon: FaLinkedin, url: "https://linkedin.com/in/chiragsahu" },
    { icon: FaTwitter, url: "https://x.com/chirag_sa_hu" },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 6,
              color: "text.primary",
              textAlign: "center",
              "&::after": {
                content: '""',
                display: "block",
                width: "60px",
                height: "4px",
                bgcolor: "primary.main",
                mt: 2,
                mx: "auto",
              },
            }}
          >
            Get In Touch
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ mb: 3, color: "text.primary" }}>
                Let's Connect
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 4, color: "text.secondary" }}
              >
                I'm currently looking for new opportunities. Whether you have a
                question or just want to say hi, I'll try my best to get back to
                you!
              </Typography>
              <Box sx={{ mb: 4, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1 }}>
                <Button
                  startIcon={<EmailIcon />}
                  href="mailto:chiragsahu2020@gmail.com"
                  sx={{
                    color: "primary.main",
                    "&:hover": {
                      bgcolor: "rgba(100, 255, 218, 0.1)",
                    },
                  }}
                >
                  chiragsahu2020@gmail.com
                </Button>
                <Button
                  startIcon={<FaWhatsapp />}
                  href="https://wa.me/917974475467"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "primary.main",
                    "&:hover": {
                      bgcolor: "rgba(100, 255, 218, 0.1)",
                    },
                  }}
                >
                  +91 7974475467
                </Button>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.url}
                    href={social.url}
                    target="_blank"
                    sx={{
                      color: "primary.main",
                      "&:hover": {
                        bgcolor: "rgba(100, 255, 218, 0.1)",
                      },
                    }}
                  >
                    <social.icon size={24} />
                  </IconButton>
                ))}
              </Box>
            </Grid>
            {/* <Grid item xs={12} md={6}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  bgcolor: 'background.paper',
                  p: 4,
                  borderRadius: 2,
                }}
              >
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  margin="normal"
                  required
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
                  required
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  margin="normal"
                  required
                  sx={{ mb: 3 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  onClick={() => {
                    window.location.href = `mailto:nv989484@gmail.com?subject=Contact from Portfolio&body=${formData.message}`;
                  }}
                  sx={{
                    bgcolor: 'primary.main', 
                    color: 'background.default',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Grid> */}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
