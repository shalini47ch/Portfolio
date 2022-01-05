import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Tools() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="secondary">
        VSCode
      </Button>
      <Button variant="contained" color="success">
        Git
      </Button>
      <Button variant="contained" color="error">
        Gitlab
      </Button>
      <Button variant="contained" color="error">
        NVDA
      </Button>
      <Button variant="contained" color="error">
        Jira
      </Button>
    </Stack>
  );
}
