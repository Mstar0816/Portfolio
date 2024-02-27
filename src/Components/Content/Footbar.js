import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

const Footbar = ()=> {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <center><h3>made in Kato</h3></center>
      </AppBar>
    </Box>
  );
}

export default  Footbar;