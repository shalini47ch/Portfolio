import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "./img1.png";

const Research = () => {
  const title = "Indian Sign Language Communicator Using CNN";
  const image = Image;
  const paperLink =
    "http://sersc.org/journals/index.php/IJAST/article/view/27989";

  return (
    <Card>
      {image && <img src={image} alt={title} style={{ maxWidth: "100%" }} />}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          href={paperLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Paper
        </Button>
      </CardContent>
    </Card>
  );
};

export default Research;
