
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const ContactMe = () => {
  const email = "shalini47choudhary@gmail.com";
  const githubProfile = "https://github.com/shalini47ch";

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Box sx={{ bgcolor: "grey.900", color: "white", py: 4 }}>
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Me
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
        <Box component="form" onSubmit={handleSubmit} mt={4}>
          <Typography variant="h5" component="h2" gutterBottom>
            Send a Message
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                required
                InputLabelProps={{
                  style: { color: "white" },
                }}
                InputProps={{
                  style: { color: "white" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                required
                InputLabelProps={{
                  style: { color: "white" },
                }}
                InputProps={{
                  style: { color: "white" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                required
                InputLabelProps={{
                  style: { color: "white" },
                }}
                InputProps={{
                  style: { color: "white" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactMe;
