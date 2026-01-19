import { Box, Container, Typography, Grid, Link } from "@mui/material";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import profile from "../assets/profile_chirag.png"; // Ensure this path is correct
import EmailIcon from "@mui/icons-material/Email";

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 8,
        bgcolor: "background.paper",
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
              mb: 4,
              color: "text.primary",
              "&::after": {
                content: '""',
                display: "block",
                width: "60px",
                height: "4px",
                bgcolor: "primary.main",
                mt: 2,
              },
            }}
          >
            About Me
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: false }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: "primary.main",
                    mb: 2,
                  }}
                >
                  Chirag Sahu
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: false }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "text.primary",
                    mb: 3,
                  }}
                >
                  Fullstack App Developer
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                viewport={{ once: false }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    mb: 3,
                    lineHeight: 1.8,
                  }}
                >
                  I am a Fullstack App Developer with 5+ years of experience in
                  mobile app, Web and Backend development. Currently working at
                  Microgenesis Cadsoft, Hyderabad. I specialize in developing
                  scalable, cross-platform applications using Flutter, Nodejs
                  and React.
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                viewport={{ once: false }}
              >
                {/* <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    mb: 3,
                    lineHeight: 1.8,
                  }}
                >
                  My expertise includes developing real-time face recognition systems, location-based services, 
                  and complex mobile applications. I have successfully delivered projects for government departments 
                  and private organizations, ensuring high performance and user satisfaction.
                </Typography> */}
              </motion.div>
              <Box
                sx={{ display: "flex", gap: 2, mb: 3, alignItems: "center" }}
              >
                <Link
                  href="https://www.linkedin.com/in/chiragsahu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "primary.main" }}
                >
                  <FaLinkedin size={24} />
                </Link>
                <Link
                  href="https://github.com/chiragsahu"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "primary.main" }}
                >
                  <FaGithub size={24} />
                </Link>
                <Link
                  href="mailto:chiragsahu2020@gmail.com"
                  sx={{
                    color: "primary.main",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <EmailIcon style={{ marginRight: 4 }} />
                </Link>
              </Box>
              {/* <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                }}
              >
                Phone: (+91) 7987715149
              </Typography> */}
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  width: "250px",
                  height: "250px",
                  margin: "0 auto",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "4px solid",
                    borderColor: "primary.main",
                    borderRadius: "50%",
                    zIndex: 0,
                  },
                }}
              >
                <motion.img
                  src={profile}
                  alt="Chirag Sahu"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "relative",
                    zIndex: 1,
                    borderRadius: "50%",
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                />
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
