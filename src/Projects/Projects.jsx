import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { FaGithub } from "react-icons/fa";
import Chat from "./chat.png";
import Travel from "./travel.png";
import Filter from "./filter.png";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Design from "./design.png";

const Projects = () => {
  const projects = [
    {
      title: "Chat App",
      image: Chat,
      description: (
        <>
          A full stack chatting app employing ReactJs for the client-side code
          along with Chakra UI. Features include authentication, real-time
          typing indicators, one-on-one chat, group-chat, user search.
        </>
      ),
      githubLink: "https://github.com/shalini47ch/chit-chat-frontend",
      techStack: [
        { name: "React", link: "https://reactjs.org/" },
        { name: "Chakra UI", link: "https://chakra-ui.com/" },
        { name: "Node.js", link: "https://nodejs.org/" },
        { name: "Express", link: "https://expressjs.com/" },
      ],
    },
    {
      title: "Design Pattern Hub",
      image: Design,
      description: (
        <>
          Design Pattern Hub is a full-stack web application designed to help
          developers learn and master all 23 GoF (Gang of Four) software design
          patterns.
        </>
      ),
      githubLink: "https://github.com/shalini47ch/DesignHub",
      techStack: [
        { name: "React", link: "https://reactjs.org/" },
        { name: "MaterialUi", link: "https://materialui.com/" },
        { name: "Node.js", link: "https://nodejs.org/" },
        { name: "Express", link: "https://express.com/" },
        { name: "MongoDB", link: "https://mongodb.com/" },
      ],
    },

    {
      title: "Sign Language",
      image: Filter,
      description: (
        <>
          A deep learning project which focused to solve the problem of the
          people with hearing and speech disabilities. The features detected
          through this model were visualized through matplotlib and Keras.
        </>
      ),
      githubLink: "https://github.com/shalini47ch/Sign-Language-Translator",
      techStack: [
        { name: "Python", link: "https://www.python.org/" },
        { name: "Keras", link: "https://keras.io/" },
        { name: "Matplotlib", link: "https://matplotlib.org/" },
      ],
    },
  ];

  return (
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
      <Box display="flex" justifyContent="center" p={4}>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={2}>
                    <strong>Tech Stack:</strong>
                  </Typography>
                  <Box display="flex" flexWrap="wrap" gap={1} mt={1}>
                    {project.techStack.map((tech, techIndex) => (
                      <Link
                        key={techIndex}
                        href={tech.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                        color="primary"
                      >
                        {tech.name}
                      </Link>
                    ))}
                  </Box>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<FaGithub />}
                  >
                    View on GitHub
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects;
