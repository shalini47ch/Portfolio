import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  Avatar,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { FaGithub, FaMedium, FaLinkedin, FaEnvelope } from "react-icons/fa";
import image from "./shalini.jpg";

const About = () => {
  const email = "shalini47choudhary@gmail.com";
  const githubProfile = "https://github.com/shalini47ch";
  const mediumProfile = "https://medium.com/@shalini47choudhary";
  const linkedinProfile = "https://www.linkedin.com/in/shalini9ch/";

  const codingProfiles = [
    { name: "Leetcode", link: "https://leetcode.com/shalini47choudhary/" },
    { name: "GeeksforGeeks", link: "https://auth.geeksforgeeks.org/user/shalinichoudhary/practice/" },
    { name: "Hackerrank", link: "https://www.hackerrank.com/Shalini09" },
    { name: "Codestudio", link: "https://www.codingninjas.com/codestudio/profile/shalini_2a1e" },
    { name: "Github", link: githubProfile },
  ];

  return (
    <Box sx={{ bgcolor: "grey.900", color: "white", py: 4 }}>
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          <i>About Shalini</i>
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Avatar
              alt="Shalini"
              src={image}
              sx={{ width: 300, height: 300, mx: "auto" }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="body1" paragraph>
              <i>Shalini is a dynamic and deeply driven Software Development Engineer (SDE) who possesses a remarkable talent for leveraging technology to solve real-world problems. Her expertise extends into various facets of the tech world.</i>
            </Typography>
            <Typography variant="body1" paragraph>
              <i>Shalini is proficient in multiple programming languages, including Python, JavaScript, and C++, and has a solid foundation in computer science essentials such as data structures, algorithms, and object-oriented programming. Her competence extends to database management systems and a wide array of tools and technologies, making her a versatile asset in the realm of software development.</i>
            </Typography>
            <Typography variant="body1" paragraph>
              <i>What truly sets Shalini apart is her innate ability to quickly adapt to and excel with any technology stack she encounters. Currently, she is delving into the intricate landscape of system design, exploring how tech giants effectively manage and scale their products.</i>
            </Typography>
            <Typography variant="body1" paragraph>
              <i>Beyond her coding expertise, Shalini's interests encompass areas like machine learning and her significant contributions to addressing the challenges faced by speech and hearing-impaired individuals, as evidenced by her published research work.</i>
            </Typography>
            <Typography variant="body1" paragraph>
              <i>If you're on the lookout for an adaptable and versatile SDE to elevate your projects, feel free to get in touch with her. With a keen eye for exciting and challenging opportunities, she welcomes collaborations that promise innovation and success in the software development arena.</i>
            </Typography>
            <Typography variant="body1" paragraph>
            <i>Shalini also writes insightful blogs on Medium, sharing her knowledge and experiences with the tech community.</i>
            </Typography>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Typography variant="h5" component="h2" gutterBottom>
            Coding Profiles
          </Typography>
          <Grid container spacing={2}>
            {codingProfiles.map((profile, index) => (
              <Grid item key={index}>
                <Button
                  variant="contained"
                  color="primary"
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profile.name}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* <Box mt={4}>
          <Typography variant="h5" component="h2" gutterBottom>
            Get in Touch
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <IconButton
                component={Link}
                href={`mailto:${email}`}
                color="inherit"
                aria-label="Email"
              >
                <FaEnvelope size={30} />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="body1">{email}</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} alignItems="center" mt={2}>
            <Grid item>
              <IconButton
                component={Link}
                href={githubProfile}
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                aria-label="GitHub"
              >
                <FaGithub size={30} />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <Link
                  href={githubProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  underline="hover"
                >
                  {githubProfile}
                </Link>
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} alignItems="center" mt={2}>
            <Grid item>
              <IconButton
                component={Link}
                href={mediumProfile}
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                aria-label="Medium"
              >
                <FaMedium size={30} />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <Link
                  href={mediumProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  underline="hover"
                >
                  {mediumProfile}
                </Link>
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} alignItems="center" mt={2}>
            <Grid item>
              <IconButton
                component={Link}
                href={linkedinProfile}
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={30} />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <Link
                  href={linkedinProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  underline="hover"
                >
                  {linkedinProfile}
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box> */}
      </Container>
    </Box>
  );
};

export default About