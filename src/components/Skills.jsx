import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

// Material Design Icons (react-icons/md)
import {
  MdAndroid,
  MdHtml,
  MdStorage,
  MdDevices,
  MdOutlineJavascript,
  MdOutlineLeaderboard,
  MdDeveloperMode,
  MdBuild,
  MdCloud,
} from "react-icons/md";

// Skill data with Material icons separated by categories
export const WorkHistory = () => {
  const workExperience = [
    {
      company: "Arth Tech Globals",
      subtitle: "(Payroll via Microgenesis Cadsoft Pvt. Ltd.) Contract",
      position: "FlutterFlow & Node.js Developer",
      duration: "Sep 2025 – Present",
      achievements: [
        "Developed and maintained multiple cross-platform applications using FlutterFlow, handling the complete lifecycle from UI design to App Store deployment.",
        "Designed and implemented backend Node.js API routes and cron jobs to meet client-specific automation and synchronization requirements.",
        "Created Python scripts to automate business processes and perform large-scale data migration with accuracy and speed.",
        "Enhanced app performance and reduced manual effort by nearly 40% through backend and automation optimizations.",
      ],
    },
    {
      company: "Talentas Technology",
      position: "Flutter Developer",
      duration: "Jun 2020 – Dec 2020",
      achievements: [
        "Developed responsive Flutter applications for iOS and Android platforms.",
        "Integrated REST APIs and Firebase services for real-time data management.",
        "Implemented UI/UX designs with Framer Motion animations and Material Design principles.",
      ],
    },
  ];

  return (
    <Box sx={{ my: 6 }}>
      <Typography
        variant="h3"
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
        Work History
      </Typography>

      {/* Vertical Timeline Container */}
      <Box
        sx={{
          position: "relative",
          maxWidth: "800px",
          mx: "auto",
          "&::before": {
            content: '""',
            position: "absolute",
            left: { xs: "20px", md: "50%" },
            transform: { md: "translateX(-50%)" },
            top: 0,
            bottom: 0,
            width: "2px",
            bgcolor: "primary.main",
            opacity: 0.3,
          },
        }}
      >
        {workExperience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                mb: 4,
                display: "flex",
                flexDirection: {
                  xs: "column",
                  md: index % 2 === 0 ? "row-reverse" : "row",
                },
                gap: 2,
              }}
            >
              {/* Timeline Dot */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "flex-start", md: "center" },
                  flex: { md: 1 },
                  pt: 1,
                }}
              >
                <Box
                  sx={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    bgcolor: "primary.main",
                    border: "4px solid",
                    borderColor: "background.default",
                    position: "relative",
                    zIndex: 1,
                    ml: { xs: 1.5, md: 0 },
                  }}
                />
              </Box>

              {/* Content Card */}
              <Box sx={{ flex: { md: 1 }, pl: { xs: 4, md: 0 } }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      bgcolor: "background.paper",
                      border: "1px solid",
                      borderColor: "primary.main",
                      borderOpacity: 0.2,
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 8px 24px rgba(100, 255, 218, 0.2)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "start",
                        mb: 2,
                      }}
                    >
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "primary.main",
                            fontWeight: "bold",
                            mb: 0.5,
                          }}
                        >
                          {job.position}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "text.primary",
                            fontWeight: "600",
                            mb: 0.5,
                          }}
                        >
                          {job.company}
                        </Typography>
                        {job.subtitle && (
                          <Typography
                            variant="caption"
                            sx={{
                              color: "text.secondary",
                              display: "block",
                              mb: 1,
                            }}
                          >
                            {job.subtitle}
                          </Typography>
                        )}
                      </Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "primary.main",
                          fontWeight: "bold",
                          whiteSpace: "nowrap",
                          ml: 2,
                          bgcolor: "rgba(100, 255, 218, 0.1)",
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 1,
                        }}
                      >
                        {job.duration}
                      </Typography>
                    </Box>

                    {/* Achievements */}
                    <Box sx={{ mt: 2 }}>
                      {job.achievements.map((achievement, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            mb: 1,
                          }}
                        >
                          <Typography
                            sx={{
                              color: "primary.main",
                              mr: 1.5,
                              mt: 0.5,
                              fontWeight: "bold",
                              minWidth: "16px",
                            }}
                          >
                            ◦
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "text.secondary",
                              lineHeight: 1.6,
                            }}
                          >
                            {achievement}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>

      {/* Note about resume */}
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          For more detailed information about my work history, please download
          my{" "}
          <Box
            component="a"
            href="https://bit.ly/chiragsahu-resume"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "primary.main",
              textDecoration: "none",
              fontWeight: "bold",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            resume
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

const skills = {
  Languages: [
    { name: "Dart", icon: MdDeveloperMode, level: 95 },
    { name: "JavaScript", icon: MdOutlineJavascript, level: 80 },
    { name: "Python", icon: MdOutlineJavascript, level: 80 },
    { name: "Kotlin", icon: MdOutlineJavascript, level: 80 },
    { name: "HTML/CSS", icon: MdHtml, level: 70 },
  ],
  Frameworks: [
    { name: "Flutter", icon: MdDevices, level: 95 },
    { name: "Node.js", icon: MdBuild, level: 75 },
  ],
  Databases: [
    { name: "MySQL", icon: MdStorage, level: 80 },
    { name: "MongoDB", icon: MdOutlineLeaderboard, level: 75 },
  ],
  "Development Tools": [
    { name: "Git/GitHub", icon: MdCloud, level: 90 },
    { name: "Android Studio", icon: MdAndroid, level: 90 },
    { name: "Flutterflow", icon: MdBuild, level: 80 },
    { name: "AWS", icon: MdCloud, level: 65 },
    { name: "JIRA", icon: MdOutlineLeaderboard, level: 80 },
  ],
};

const Skills = () => {
  return (
    <Box
      id="skills"
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
            Skills
          </Typography>

          {Object.entries(skills).map(([category, skillsArray]) => (
            <Box key={category} sx={{ mb: 6 }}>
              <Typography
                variant="h4"
                sx={{
                  mb: 3,
                  color: "text.primary",
                  borderBottom: "2px solid",
                  borderColor: "primary.main",
                  pb: 1,
                }}
              >
                {category}
              </Typography>
              <Grid container spacing={4}>
                {skillsArray.map((skill, index) => (
                  <Grid item xs={6} sm={4} md={3} key={skill.name}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Paper
                        elevation={3}
                        sx={{
                          p: 3,
                          textAlign: "center",
                          bgcolor: "background.paper",
                          transition: "transform 0.3s ease-in-out",
                          "&:hover": {
                            transform: "translateY(-5px)",
                          },
                        }}
                      >
                        <Box
                          component={skill.icon}
                          sx={{
                            fontSize: 40,
                            color: "primary.main",
                            mb: 2,
                          }}
                        />
                        <Typography
                          variant="h6"
                          sx={{
                            color: "text.primary",
                            mb: 1,
                          }}
                        >
                          {skill.name}
                        </Typography>
                        <Box
                          sx={{
                            width: "100%",
                            height: 4,
                            bgcolor: "background.default",
                            borderRadius: 2,
                            overflow: "hidden",
                          }}
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                            style={{
                              height: "100%",
                              backgroundColor: "#64ffda",
                            }}
                          />
                        </Box>
                      </Paper>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;
