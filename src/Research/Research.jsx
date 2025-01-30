import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Image from "./img1.png";

const Research = () => {
  const title = "Indian Sign Language Communicator Using CNN";
  const image = Image;
  const paperLink =
    "http://sersc.org/journals/index.php/IJAST/article/view/27989";

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
      <Card sx={{ maxWidth: 345, m: 2, boxShadow: 3 }}>
        {image && (
          <CardMedia component="img" height="140" image={image} alt={title} />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Box mt={2}>
            <Button
              variant="contained"
              color="primary"
              href={paperLink}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textTransform: "none" }}
            >
              View Paper
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Research;
