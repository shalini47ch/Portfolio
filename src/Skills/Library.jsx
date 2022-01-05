import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Library() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="secondary">
        React
      </Button>
      <Button variant="contained" color="primary">
        Keras
      </Button>
    </Stack>
  );
}
