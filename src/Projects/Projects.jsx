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
import Box from '@mui/material/Box'; 

const Projects = () => {
 
  const projects = [
    {
      title: "Chat App",
      image: Chat,
      description: (
        <>
          A full stack chatting app employing ReactJs for the client-side code
          along with Chakra UI.Features include authentication, real-time
          typing indicators, one-on-one chat, group-chat, user search
        </>
      ),
      githubLink: "https://github.com/shalini47ch/chit-chat-frontend",
    },
    {
      title: "Travel Memory App",
      image: Travel,
      description: (
        <>
          A full-stack web application that transforms the way you capture and
          share your travel adventures. Seamlessly blending MongoDB Atlas,
          Express.js, Node.js, and React.js.
        </>
      ),
      githubLink:
        "https://github.com/shalini47ch/Travel-memory-app-BackendCode-",
    },
    {
      title: "Sign Language",
      image: Filter,
      description: (
        <>
          A deep learning project which focused to solve the problem of the
          people with hearing and speech disabilities. The features detected through this model were visualized through matplotlib and Keras.
        </>
      ),
      githubLink: "https://github.com/shalini47ch/Sign-Language-Translator",
    },
  ];

  return (
    <Box display="flex" justifyContent="center"> 
      <Grid container spacing={2} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}> 
            <Card sx={{ maxWidth: 300 }}> {/* Adjusted card size */}
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
                {/* GitHub icon with link */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    size={20}
                    style={{
                      marginLeft: "5px",
                      color: "#333",
                      cursor: "pointer",
                    }}
                  />
                </a>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
