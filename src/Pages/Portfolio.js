import React, { useState } from "react";
import Navbar from "../Components/Content/Navbar";
import Button from "@mui/material/Button";

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = ['All', 'HomePage', 'LandingPage', 'App', 'Other'];

    const allImg = Array.from({ length: 24 }, (_, index) => index + 1);
    const hpImg = Array.from({ length: 12 }, (_, index) => (index +1)*2);
    const webImg = Array.from({ length: 8 }, (_, index) => (index +1)*3-2);
    const appImg = Array.from({ length: 6 }, (_, index) => (index +1)*4);
    const otherImg = Array.from({ length: 4 }, (_, index) => (index +1)*5+3);
    
    // const setImg = ['allImg', 'hpImg', 'webImg', 'appImg', 'otherImg'];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <>
            <Navbar />
            <center style={{ padding: '20px 0 20px 0' }}>
                {categories.map((category) => (
                    <Button
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        style={{
                            fontSize: '18px',
                            background: selectedCategory === category ? '#1976D2' : 'transparent',
                            color: selectedCategory === category ? '#FFF' : '#000',
                        }}
                    >
                        {category}
                    </Button>
                ))}
            </center>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {allImg.map((number) => (
                    <img
                        key={number}
                        src={require(`../Assets/img (${number}).jpg`)}
                        alt={`image${number}`}
                        width={'420px'}
                        height={'250px'}
                        style={{ margin: 10, display: selectedCategory === 'All' || selectedCategory === `image${number % 5 === 0 ? 5 : number % 5}` ? 'block' : 'none' }}
                    />
                ))}
                {hpImg.map((number) => (
                    <img
                        key={number}
                        src={require(`../Assets/img (${number}).jpg`)}
                        alt={`image${number}`}
                        width={'420px'}
                        height={'250px'}
                        style={{ margin: 10, display: selectedCategory === 'HomePage' || selectedCategory === `image${number % 5 === 0 ? 5 : number % 5}` ? 'block' : 'none' }}
                    />
                ))}
                {webImg.map((number) => (
                    <img
                        key={number}
                        src={require(`../Assets/img (${number}).jpg`)}
                        alt={`image${number}`}
                        width={'420px'}
                        height={'250px'}
                        style={{ margin: 10, display: selectedCategory === 'LandingPage' || selectedCategory === `image${number % 5 === 0 ? 5 : number % 5}` ? 'block' : 'none' }}
                    />
                ))}
                {appImg.map((number) => (
                    <img
                        key={number}
                        src={require(`../Assets/img (${number}).jpg`)}
                        alt={`image${number}`}
                        width={'420px'}
                        height={'250px'}
                        style={{ margin: 10, display: selectedCategory === 'App' || selectedCategory === `image${number % 5 === 0 ? 5 : number % 5}` ? 'block' : 'none' }}
                    />
                ))}
                {otherImg.map((number) => (
                    <img
                        key={number}
                        src={require(`../Assets/img (${number}).jpg`)}
                        alt={`image${number}`}
                        width={'420px'}
                        height={'250px'}
                        style={{ margin: 10, display: selectedCategory === 'Other' || selectedCategory === `image${number % 5 === 0 ? 5 : number % 5}` ? 'block' : 'none' }}
                    />
                ))}
            </div>
        </>
    );
};

export default Portfolio;
