import React from 'react'
import '../hero.css'

function Hero() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className='hero'>
            <div className="headline">
                <p>
                    Discover Delicious Recipes & Refreshing Drinks at One Place
                </p>
            </div>
            <div className="sub-headline">
                <p>Search,explore,and save your favourite meals & beverages instantly</p>
            </div>

            <div className="buttons">
                <div className="recipe-button">
                    <button onClick={() => scrollToSection("recipes-section")}>Find Recipes </button>
                </div>
                <div className="drinks-button">
                    <button onClick={() => scrollToSection("drinks-section")}>Find Drinks</button>

                </div>
            </div>

        </div>
    )
}

export default Hero
