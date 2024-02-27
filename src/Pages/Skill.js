import '../Components/Content/style.css';
import React, { useState } from 'react';
import Navbar from "../Components/Content/Navbar"
import { skillData } from "../Components/Content/SkillData";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Icon } from "@iconify/react";
import { ButtonGroup } from '@mui/material';

const Home = () => {
  const [activeGrid, setActiveGrid] = useState(null);

  const handleGridClick = (index) => {
    setActiveGrid(index);
  };

  return (
    <>
    <Navbar />
    <ButtonGroup variant="contained" aria-label="outlined primary button group" style={{}}>
    </ButtonGroup>
    <Stack id="home" className="home">
      <Stack className="home__contact-me">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          alignItems="center"
          justifyContent="center"
          marginTop="350px"
          sx={{
            transform: activeGrid !== null ? 'translateY(-300px)' : 'none', transition: 'transform 0.7s ease'
          }}
          >
          {skillData.map((skills, index) => (
            <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={index}
            sx={{ cursor: "pointer" }}
            onClick={() => handleGridClick(index)}
            >
              <Icon
                icon={`${activeGrid === index ? skills.icon : skills.skill}`}
                className="display-4 icon-hover-effect"
                width={100}
                height={100}
                />
              <Typography sx={{ marginTop: 1 }} variant="h4" align="center">
                {skills.name}
              </Typography>
            </Grid>
          ))}
        </Stack>
        <Stack sx={{ width: "100%", paddingX: "100px" }}>
          {skillData.map((skills, index) => (
            <Typography
            variant="h4"
            color="white"
            align="center"
            paddingRight="210px"
            className={activeGrid === index ? 'typography-fade-in' : 'typography-fade-out'}
            style={{ display: activeGrid === index ? 'block' : 'none' }}
            >
              {skills.description}
            </Typography>
          ))}
        </Stack>
      </Stack>
    </Stack>
  </>
  );
};
export default Home;




