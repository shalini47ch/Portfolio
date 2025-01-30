import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
  Paper,
  Avatar,
  Grid,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

import { TbBrandVscode } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import { FaJira } from "react-icons/fa";
import ContactMe from "./Contact/Contact";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import logo from "./image.png";
import logo1 from "./badge2024.png";
import logo2 from "./500day.png";
import logo3 from "./1000days.png";
import {
  SiBitbucket,
  SiCplusplus,
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiSublimetext,
  SiPostman,
  SiPycharm,
  SiAnaconda,
  SiNetlify,
  SiHeroku,
  SiRender,
  SiThealgorithms,
} from "react-icons/si";
import { FaFlask, FaGithub, FaNodeJs, FaPython } from "react-icons/fa";
import Research from "../src/Research/Research";
import Projects from "../src/Projects/Projects";
import About from "../src/About/About";

const Home = () => (
  <Box
    sx={{
      background:
        "linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      textAlign: "center",
    }}
  >
    <Container>
      <Box textAlign="center" mt={10}>
        <Typography variant="h2" component="h1">
          I'm a <span style={{ color: "#00b0ff" }}>Software</span>{" "}
          <span style={{ color: "#1e88e5" }}>Engineer</span>{" "}
          <span style={{ color: "white" }}> Full Stack Developer</span>
        </Typography>
        <Typography variant="h6" color="textSecondary" mt={2}>
          A learner by heart and Software Engineer by Profession. Looking
          forward for an exciting role.
        </Typography>
        <Box mt={4}>
          <IconButton color="inherit" href="https://github.com/shalini47ch">
            <GitHub fontSize="large" />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/shalini9ch/"
          >
            <LinkedIn fontSize="large" />
          </IconButton>
          <IconButton
            color="inherit"
            href="mailto:shalini47choudhary@gmail.com"
          >
            <Email fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </Container>
  </Box>
);

const Experience = () => (
  <Box
    sx={{
      background:
        "linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      textAlign: "center",
    }}
  >
    <Container>
      <Typography variant="h4" mt={10} mb={4}>
        Experience
      </Typography>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="white">
              Aug 2021 - Nov 2021 · 4 mos
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <Avatar src={logo} alt="Publicis Sapient logo" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" component="h1">
                Publicis Sapient
              </Typography>
              <Typography>Associate Experience Technology L1</Typography>
              <Typography variant="body2" color="textSecondary">
                Bengaluru, Karnataka, India
              </Typography>
              <Typography variant="body2" mt={2}>
                As a software engineer, I have demonstrated my technical
                proficiency and ability to deliver results. Some of my notable
                contributions include:
                <ul>
                  <li>
                    <i>
                      Designed new variations for the microapp which resulted in
                      increased acknowledgement rates from 54% to 85% amid A/B
                      test.
                    </i>
                  </li>
                  <li>
                    <i>
                      Worked collaboratively with the team to develop reusable
                      components and authored unit test cases, resulting in
                      improved test coverage by 30%.
                    </i>
                  </li>
                  <li>
                    <i>
                      Improved website <b>performance by 10% </b>through the
                      development of scripts for the Telium tags.
                    </i>
                  </li>
                  <li>
                    <i>
                      Devised responsive and accessible web pages in various
                      submodules through HTML5, CSS3, JavaScript.
                    </i>
                  </li>
                  <li>Addressed design and accessibility related bugs.</li>
                  <li>
                    Created loaders using{" "}
                    <b>SVG to give a better user experience</b>
                    until the page was loaded.
                  </li>
                </ul>
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="white">
              Jan 2021 - Aug 2021 · 8 mos
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <Avatar src={logo} alt="Publicis Sapient logo" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" component="h1">
                <i>Publicis Sapient</i>
              </Typography>
              <Typography>
                <i>Junior Associate Technology</i>
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <i>Bengaluru, Karnataka, India</i>
              </Typography>
              <Typography variant="body2" mt={2} fontFamily="sans-serif">
                <ul>
                  <li>
                    <i>
                      Implemented atomic design pattern, resulting in{" "}
                      <b>improved code reliability and easier updates</b>.
                    </i>
                  </li>
                  <li>
                    <i>
                      Improved web accessibility by{" "}
                      <b>10% through interactive testing</b> and design
                      modifications.
                    </i>
                  </li>
                  <li>
                    Adopted <b>ES6, code linters, and formatters</b> to enhance
                    code quality.
                  </li>
                  <li>
                    <i>
                      Collaborated with product managers and backend teams to
                      ensure timely delivery of the product.
                    </i>
                  </li>
                  <li>
                    <i>
                      Developed a
                      <b> generic CSS file to facilitate component</b>
                      reusability.
                    </i>
                  </li>
                  <li>
                    <i>
                      Utilized{" "}
                      <b>
                        Context API instead of Redux to manage state management
                      </b>
                      , as Redux was deemed unnecessary in this scenario.
                    </i>
                  </li>
                </ul>
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  </Box>
);

const skills = [
  { name: "Python", icon: <FaPython color="yellow" size={40} /> },
  { name: "Javascript", icon: <SiJavascript color="orange" size={40} /> },
  { name: "C++", icon: <SiCplusplus color="red" size={40} /> },
  { name: "HTML5", icon: <SiHtml5 color="orange" size={40} /> },
  { name: "CSS3", icon: <SiCss3 color="blue" size={40} /> },
  { name: "React.js", icon: <SiReact color="lightblue" size={40} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="blue" size={40} /> },
  { name: "Material UI" },
  { name: "Node.js", icon: <FaNodeJs color="green" size={40} /> },
  { name: "Express.js", icon: <SiExpress color="darkgreen" size={40} /> },
  { name: "Flask", icon: <FaFlask color="grey" size={40} /> },
  { name: "Redis", icon: <SiRedis color="red" size={40} /> },
  { name: "MySQL", icon: <SiMysql color="purple" size={40} /> },
  { name: "MongoDB", icon: <SiMongodb color="green" size={40} /> },
  { name: "Git", icon: <FaGithub color="white" size={40} /> },
  { name: "Bitbucket", icon: <SiBitbucket color="blue" size={40} /> },
  { name: "VSCode", icon: <TbBrandVscode color="blue" size={40} /> },
  { name: "Sublime Text", icon: <SiSublimetext color="orange" size={40} /> },
  { name: "NVDA", icon: <IoSettings color="green" size={40} /> },
  { name: "JIRA", icon: <FaJira color="blue" size={40} /> },
  { name: "Postman", icon: <SiPostman color="orange" size={40} /> },
  { name: "PyCharm", icon: <SiPycharm color="orange" size={40} /> },
  { name: "Anaconda", icon: <SiAnaconda color="green" size={40} /> },
  { name: "Netlify", icon: <SiNetlify color="blue" size={40} /> },
  { name: "Heroku", icon: <SiHeroku color="purple" size={40} /> },
  { name: "Render", icon: <SiRender color="darkgreen" size={40} /> },
  {
    name: "DSA",
    icon: <SiThealgorithms color="gray" size={40} />,
  },
];

const Skills = () => (
  <Box
    sx={{
      background:
        "linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      textAlign: "center",
    }}
  >
    <Container>
      <Grid container spacing={4} justifyContent="center">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
            padding: 2,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            borderRadius: 2,
          }}
        >
          {skills.map((skill, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: 2,
                color: "white",
              }}
            >
              <ListItemIcon sx={{ fontSize: 50, marginBottom: 1 }}>
                {skill.icon}
              </ListItemIcon>
              <ListItemText primary={skill.name} />
            </Box>
          ))}
        </Box>
      </Grid>
    </Container>
  </Box>
);

const LeetcodeStats = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ bgcolor: "grey.900", color: "white", minHeight: "100vh" }}>
      <Container sx={{ py: 4 }}>
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box position="relative">
                <Avatar
                  sx={{
                    width: 160,
                    height: 160,
                    border: "8px solid",
                    borderColor: "grey.700",
                  }}
                >
                  <Box textAlign="center">
                    <Typography variant="h4" component="div">
                      1766
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      /3436
                    </Typography>
                    <Typography variant="body1" color="green">
                      Solved
                    </Typography>
                  </Box>
                </Avatar>
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  width={160}
                  height={160}
                  borderRadius="50%"
                  border="8px solid"
                  borderColor="cyan yellow red yellow"
                />
              </Box>
              <Typography color="white" mt={2}>
                32 Attempting
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h6">Badges</Typography>
              <Typography variant="h4">47</Typography>
              <Box display="flex" mt={2}>
                <Avatar src={logo1} />
                <Avatar src={logo2} />
                <Avatar src={logo3} />
              </Box>
              <Typography color="white" mt={2}>
                Most Recent Badge
              </Typography>
              <Typography variant="h6">1000 Days Badge</Typography>
            </Box>
          </Grid>
        </Grid>
        <Box
          bgcolor="grey.800"
          p={4}
          mt={4}
          borderRadius={2}
          display="flex"
          flexDirection="column"
        >
          <Typography variant="h5" mb={4}>
            2,967 submissions in the past one year
          </Typography>
          <Box display="flex" justifyContent="space-between" mb={4}>
            <Box display="flex" flexWrap="wrap" gap={0.5}>
              {Array.from({ length: 100 }).map((_, index) => (
                <Box
                  key={index}
                  width={16}
                  height={16}
                  bgcolor="green"
                  borderRadius={0.5}
                />
              ))}
            </Box>
            <Box display="flex" alignItems="center" gap={2}>
              <Typography color="white">Total active days: 367</Typography>
              <Typography color="white">Max streak: 367</Typography>
              <IconButton
                onClick={handleClick}
                sx={{ bgcolor: "lightblue", p: 1, borderRadius: 1 }}
              >
                Current <i className="fas fa-caret-down"></i>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  sx: {
                    bgcolor: "grey.800",
                    color: "white",
                  },
                }}
              >
                <MenuItem onClick={handleClose}>Option 1</MenuItem>
                <MenuItem onClick={handleClose}>Option 2</MenuItem>
                <MenuItem onClick={handleClose}>Option 3</MenuItem>
              </Menu>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography color="whitesmoke">Jan</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const App = () => {
  return (
    <Router>
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, color: "#00b0ff" }}>
            shalini.dev
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/experience">
            Experience
          </Button>
          <Button color="inherit" component={Link} to="/skills">
            Skills
          </Button>
          <Button color="inherit" component={Link} to="/projects">
            Projects
          </Button>
          <Button color="inherit" component={Link} to="/research">
            Research
          </Button>
          <Button color="inherit" component={Link} to="/leetcodestats">
            LeetcodeStats
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/research" component={Research} />
        <Route path="/contact" component={ContactMe} />
        <Route path="/leetcodestats" component={LeetcodeStats} />
      </Switch>
    </Router>
  );
};

export default App;
