import React from "react"
import Navbar from "../Components/Content/Navbar";
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Portfolio = () => {
    return (
        <>
            <Navbar />
            <center direction={{ xs: 'column', sm: 'row' }}  spacing={{ xs: 2, sm: 4, md: 6 }} style={{marginTop: 30, marginBottom: 30}}  >
                <Button>All</Button>
                <Button>HomePage</Button>
                <Button>Website</Button>
                <Button>App</Button>
                <Button>Other</Button>
            </center>
            <div>
                <img src={require('../Assets/img (1).jpg')} alt="alternatetext" width={460} height={250}/>
                <img src={require('../Assets/img (2).jpg')} alt="alternatetext" width={460} height={250}/>
                <img src={require('../Assets/img (3).jpg')} alt="alternatetext" width={460} height={250}/>
                <img src={require('../Assets/img (4).jpg')} alt="alternatetext" width={460} height={250}/>
                <img src={require('../Assets/img (5).jpg')} alt="alternatetext" width={460} height={250}/>
                <img src={require('../Assets/img (6).jpg')} alt="alternatetext" width={460} height={250}/>
                <img src={require('../Assets/img (7).jpg')} alt="alternatetext" width={460} height={250}/>
                <img src={require('../Assets/img (8).jpg')} alt="alternatetext" width={460} height={250}/>
                <img src={require('../Assets/img (9).jpg')} alt="alternatetext" width={460} height={250}/>
                <img src={require('../Assets/img (10).jpg')} alt="alternatetext" width={460} height={250}/>
                <img src={require('../Assets/img (11).jpg')} alt="alternatetext" width={460} height={250}/>
                <img src={require('../Assets/img (12).jpg')} alt="alternatetext" width={460} height={250}/>
                <img src={require('../Assets/img (13).jpg')} alt="alternatetext" width={460} height={250}/>
                <img src={require('../Assets/img (14).jpg')} alt="alternatetext" width={460} height={250}/>
                <img src={require('../Assets/img (15).jpg')} alt="alternatetext" width={460} height={250}/>
                <img src={require('../Assets/img (16).jpg')} alt="alternatetext" width={460} height={250}/>
                <img src={require('../Assets/img (17).jpg')} alt="alternatetext" width={460} height={250}/>
                <img src={require('../Assets/img (18).jpg')} alt="alternatetext" width={460} height={250}/>
                <img src={require('../Assets/img (19).jpg')} alt="alternatetext" width={460} height={250}/>
                <img src={require('../Assets/img (20).jpg')} alt="alternatetext" width={460} height={250}/>
                <img src={require('../Assets/img (21).jpg')} alt="alternatetext" width={460} height={250}/>
                <img src={require('../Assets/img (22).jpg')} alt="alternatetext" width={460} height={250}/>
                <img src={require('../Assets/img (23).jpg')} alt="alternatetext" width={460} height={250}/>
                <img src={require('../Assets/img (24).jpg')} alt="alternatetext" width={460} height={250}/>
            </div>
        </>
    )
}

export default Portfolio;