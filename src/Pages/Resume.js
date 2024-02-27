import React from "react"
import Navbar from "../Components/Content/Navbar";
import resume from "../resume.pdf";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

const Resume =()=> {

  return (
    <>
        <Navbar />     
        <center>
            <Card sx={{ maxWidth: 1400, maxHeight:900, marginTop: 20 }} >
                <div style={{display: "flex", marginTop: "20px", justifyContent: "center", gap: "20px"}}>
                    <Card sx={{ maxWidth: 800 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h3" component="div">Front-end developer</Typography>
                                <Typography gutterBottom variant="h5" component="div">(2015-2016)</Typography>
                                <Typography variant="body2" color="text.secondary">Working as front-end developer.</Typography>
                                <Typography variant="body2" color="text.secondary">Intern</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 800 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h3" component="div">Front-end developer</Typography>
                                <Typography gutterBottom variant="h5" component="div">(2016-2018)</Typography>
                                <Typography variant="body2" color="text.secondary">Working as front-end developer in company.</Typography>
                                <Typography variant="body2" color="text.secondary">Canada IT company</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div style={{display: "flex", marginTop: "20px", justifyContent: "center", gap: "20px"}}>
                    <Card sx={{ maxWidth: 800 }}>
                            <CardActionArea>
                                <CardContent>
                                <Typography gutterBottom variant="h3" component="div">Full stack developer</Typography>
                                <Typography gutterBottom variant="h5" component="div">(2019-2021)</Typography>
                                <Typography variant="body2" color="text.secondary">Working as full stack developer in company.</Typography>
                                <Typography variant="body2" color="text.secondary">US IT company</Typography>
                                </CardContent>
                            </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 800 }}>
                            <CardActionArea>
                                <CardContent>
                                <Typography gutterBottom variant="h3" component="div">Senior full stack developer</Typography>
                                <Typography gutterBottom variant="h5" component="div">(2022-now)</Typography>
                                <Typography variant="body2" color="text.secondary">Working as front-end developer in company.</Typography>
                                <Typography variant="body2" color="text.secondary">Freelancer</Typography>
                                </CardContent>
                            </CardActionArea>
                    </Card>
                </div>
                <CardActions>
                    <Button href={resume} target="_blank" rel="noreferrer" variant="outlined">SHOW</Button>
                    <Button variant="outlined">aaaa</Button>
                </CardActions>
            </Card>
        </center>
    </>
  );
}

export default Resume;
