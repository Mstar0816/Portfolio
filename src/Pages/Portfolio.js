import React from "react";
import Navbar from "../Components/Content/Navbar";
import Button from '@mui/material/Button';

const Portfolio = () => {

    const myImg = Array.from({ length: 24 }, (_, index) => index + 1);
    
    return (
        <>
            <Navbar />
            <center style={{padding: '20px 0 20px 0'}}>
                <Button style={{fontSize: '18px'}}>All</Button>
                <Button style={{fontSize: '18px'}}>HomePage</Button>
                <Button style={{fontSize: '18px'}}>Website</Button>
                <Button style={{fontSize: '18px'}}>App</Button>
                <Button style={{fontSize: '18px'}}>Other</Button>
            </center>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {myImg.map((number) => (
                    <img
                        key={number}
                        src={require(`../Assets/img (${number}).jpg`).default}
                        alt={`image${number}`}
                        width={'420px'}
                        height={'250px'}
                        style={{ margin: 10 }}
                    />
                ))}
            </div>
        </>
    );
};

export default Portfolio;