import React from "react";

import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { SiHackerrank, SiCodingninjas } from "react-icons/si";
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
// import { faHackerrank } from "@fortawesome/free-brands-svg-icons";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Grid,
  Link,
} from "@mui/material";
import "./style.css";

const About = () => {
  const codingProfiles = [
    {
      name: "LeetCode",
      link: "https://leetcode.com/shalini47choudhary/",
      icon: <SiLeetcode color="#FFA500" fontSize="1.5rem"/>,
    },
    {
      name: "GeeksforGeeks",
      link: "https://auth.geeksforgeeks.org/user/shalinichoudhary/practice/",
      icon: <SiGeeksforgeeks color="#008000" fontSize="1.5rem"/>,
    },
    {
      name: "HackerRank",
      link: "https://www.hackerrank.com/Shalini09",
      icon: <SiHackerrank color="green" fontSize="1.5rem"/>,
    },
    {
      name: "Coding Ninjas",
      link: "https://www.codingninjas.com/codestudio/profile/shalini_2a1e",
      icon: <SiCodingninjas color="yellow" fontSize="1.5rem"/>,
    },
  ];

  return (
    <Grid container justifyContent="center" className="">
      <Grid item xs={12} md={8} style={{ margin: "30px 0" }}>
        <Paper
          elevation={3}
          className="about"
          sx={{
            backgroundColor: "black",
            padding: "10px",
            width: "80%",
            color: "white",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {/* <Typography
                variant="h5"
                component="h1"
                align="center"
                color="maroon"
              >
                &lt;<b>Hello World! /</b>&gt;
              </Typography> */}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" align="center">
                Shalini is a dynamic and deeply driven Software Development
                Engineer (SDE) who possesses a remarkable talent for leveraging
                technology to solve real-world problems.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TableContainer component={Paper} sx={{ minWidth: 400 }}>
                <Table aria-label="coding-profiles">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Typography variant="h6" color="primary">
                          Coding Profiles
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h6" color="primary">
                          Links
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {codingProfiles.map((profile, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Typography color="inherit" fontWeight="bold">
                            {profile.name}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Link
                            href={profile.link}
                            color="inherit"
                            underline="none"
                            target="_blank"
                            rel="noopener"
                          >
                            {profile.icon}
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={12} align="center">
              <Typography variant="body1" >
                If you're on the lookout for an adaptable and versatile SDE to
                elevate your projects, feel free to get in touch with her.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default About;
