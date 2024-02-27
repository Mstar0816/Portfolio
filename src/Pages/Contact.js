import * as React from 'react';
import Navbar from "../Components/Content/Navbar"
// import Footbar from "../Components/Content/Footbar"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import send from "../Assets/Send.jpg"

const Contact= () => {
  return (
    <Box>
        <Navbar />
        <center><img src={send} alt="Me" style={{ height: '530px', width: '1860px' }}/></center>
        <center>
            <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '45ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <div>
                    <TextField
                    firstname
                    id="outlined-error"
                    label="FirstName"
                    placeholder="first"
                    />
                    <TextField
                    LastName
                    id="outlined-error-helper-text"
                    label="LastName"
                    placeholder="last"
                    />
                </div>
                <div>
                    <TextField
                    country
                    id="outlined-error"
                    label="Country"
                    placeholder="Japan"
                    />
                    <TextField
                    mail
                    id="outlined-error-helper-text"
                    label="Mail"
                    placeholder="mstar81612@gmail.com"
                    />
                </div>
            </Box>
            <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '92ch' },
            }}
            noValidate
            autoComplete="off"
            > 
                <div>
                <TextField
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    rows={6}
                    />
                </div>
            </Box>
            <Button variant="outlined">Send</Button>
        </center>
        {/* <Footbar /> */}
    </Box>
  );
}
export default Contact; 