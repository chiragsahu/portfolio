import React, { useState } from "react";
import { Box, Container, Typography, Grid, Paper, Tabs, Tab } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

// Material Design Icons (react-icons/md)
import {
  MdAndroid,
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
      company: "Microgenesis Cadsoft Pvt. Ltd.",
      subtitle: "Hyderabad, TG",
      position: "Fullstack App Developer",
      duration: "Sep 2025 – Jan 2026",
      achievements: [
        "Designed and Developed backend Node.js API routes and cron jobs using MERN Stack to meet client-specific automation and synchronization requirements.",
        "Maintained multiple cross-platform applications using FlutterFlow, implemented CI/CD Pipelines handling the complete lifecycle from UI design to App Store deployment.",
        "Containerized microservices using Docker and developed high-performance RESTful APIs using FastAPI to streamline data processing workflows.",
      ],
    },
    {
      company: "Talentas Technology",
      subtitle: "Hyderabad, TG",
      position: "Fullstack Developer",
      duration: "Feb 2024 – May 2025",
      achievements: [
        "Engineered robust, secure back-end architectures using Django and Node.js to manage relational databases and deliver high-throughput RESTful APIs for client applications.",
        "Engineered compliant, geo-restricted features and Firebase GA4 e-commerce tracking modules to analyze $2M in transaction volume, delivering data-driven insights that optimized marketing spend for 10k MAU.",
      ],
    },
    {
      company: "Xsilica Software Solutions Pvt. Ltd.",
      subtitle: "Hyderabad, TG",
      position: "Flutter Developer",
      duration: "Apr 2023 – Jan 2024",
      achievements: [
        "Led the development of core modules for the PayG app, improving customer on-boarding efficiency through the seamless integration of Video KYC.",
        "Collaborated with cross-functional teams to deliver customized solutions, enhancing booking and ticketing functionality, which handled thousands of transactions monthly.",
      ],
    },
    {
      company: "Techphant Consulting Group",
      subtitle: "Raipur, CG",
      position: "Fullstack Developer",
      duration: "Jan 2021 – Mar 2023",
      achievements: [
        "Built and maintained MDM solution for retailers to secure EMIs from customers on Android phones and Smart TVs.",
        "Scaled a real-time MDM monitoring system to support 100,000+ concurrent devices using optimized push notification payloads and efficient background service management.",
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
  "AI Tools": [
    { name: "Langchain", icon: MdBuild, level: 70 },
    { name: "LangGraph", icon: MdBuild, level: 70 }
  ],
  "Languages": [
    { name: "Dart (Flutter)", icon: MdDevices, level: 95 },
    { name: "JS/TS (Node.js, React)", icon: MdOutlineJavascript, level: 90 },
    { name: "Python", icon: MdOutlineLeaderboard, level: 85 },
    { name: "Kotlin", icon: MdAndroid, level: 80 },
    { name: "Java (J2EE)", icon: MdDeveloperMode, level: 75 }
  ],
  "State Management": [
    { name: "Getx", icon: MdBuild, level: 90 },
    { name: "Riverpod", icon: MdBuild, level: 85 },
    { name: "BloC", icon: MdBuild, level: 85 }
  ],
  "Frameworks": [
    { name: "MERN Stack", icon: MdStorage, level: 90 },
    { name: "Django", icon: MdCloud, level: 80 },
    { name: "FastAPI", icon: MdCloud, level: 80 }
  ],
  "Databases": [
    { name: "MySQL", icon: MdStorage, level: 85 },
    { name: "MongoDB", icon: MdStorage, level: 85 }
  ],
  "Tools": [
    { name: "Docker", icon: MdBuild, level: 85 },
    { name: "AWS (EC2, EKS, S3)", icon: MdCloud, level: 80 },
    { name: "Flutterflow", icon: MdDevices, level: 90 },
    { name: "JIRA", icon: MdOutlineLeaderboard, level: 90 }
  ]
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);
  const categories = Object.keys(skills);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

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
            Skills
          </Typography>

          <Box sx={{ mb: 6, display: "flex", justifyContent: "center" }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              textColor="primary"
              indicatorColor="primary"
              sx={{
                "& .MuiTab-root": {
                  color: "text.secondary",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  textTransform: "none",
                  "&.Mui-selected": {
                    color: "primary.main",
                  },
                },
              }}
            >
              {categories.map((category, index) => (
                <Tab key={index} label={category} />
              ))}
            </Tabs>
          </Box>

          <Box sx={{ minHeight: 300 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Grid container spacing={4} justifyContent="center">
                  {skills[categories[activeTab]].map((skill, index) => (
                    <Grid item xs={6} sm={4} md={3} key={skill.name}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
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
                              boxShadow: "0 8px 24px rgba(100, 255, 218, 0.2)",
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
                              fontSize: "1rem",
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
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 0.8, delay: 0.2 }}
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
              </motion.div>
            </AnimatePresence>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;
