import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Deploy() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="secondary">
        Heroku
      </Button>
      <Button variant="contained" color="success">
        Netlify
      </Button>
    </Stack>
  );
}
