import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills, { WorkHistory } from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import DownloadResumeButton from "./components/DownloadResumeButton";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#64ffda",
    },
    secondary: {
      main: "#ff4081",
    },
    background: {
      default: "#0a192f",
      paper: "#112240",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <Navbar />
        <Box component="main" sx={{ pt: 8 }}>
          <Hero />
          <About />
          <WorkHistory />
          <Skills />
          <Projects />
          <Contact />
        </Box>
        <DownloadResumeButton />
      </Box>
    </ThemeProvider>
  );
}

export default App;
