import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function WebTech() {
  return (
    <Stack direction="row" spacing={3}>
      <Button variant="contained" color="secondary">
        HTML5
      </Button>
      <Button variant="contained" color="success">
        CSS3
      </Button>
      <Button variant="contained" color="primary">
        ES6
      </Button>
    </Stack>
  );
}
