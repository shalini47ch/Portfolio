import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContainedButtons() {
  return (
 
    
 
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="secondary">Python</Button>
          <Button variant="contained" color="success">
            C++
          </Button>
          <Button variant="contained"color="primary">
            JS
          </Button>
        </Stack>
      );
    }
