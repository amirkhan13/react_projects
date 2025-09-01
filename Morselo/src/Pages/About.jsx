import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import '../about.css';

function About() {
    return (
        <div>
            <NavBar />
            <section className="about-container">
                <h1>About Us</h1>
                <p className="intro">
                    Welcome to <span className="brand">Morselo</span> — your go-to recipe and drink discovery app!
                </p>

                <p>
                    Our mission is to make cooking fun and accessible by providing a collection
                    of delicious meals and refreshing drinks from around the world. Whether
                    you're looking for a quick dinner idea, a fancy cocktail recipe, or just
                    some inspiration, we’ve got you covered.
                </p>

                <div className="about-features">
                    <h2>✨ Features</h2>
                    <ul>
                        <li>🍽 Discover random recipes & meals</li>
                        <li>🍹 Explore refreshing drink ideas</li>
                        <li>⭐ Save your favorites for later</li>
                        <li>🔍 Search by name or ingredient</li>
                    </ul>
                </div>

                <p className="closing">
                    Built with ❤️ using <strong>React.js</strong> <br />
                    Powered by
                    <a href="https://www.themealdb.com/" target="_blank" rel="noreferrer"> TheMealDB</a>
                    &
                    <a href="https://www.thecocktaildb.com/" target="_blank" rel="noreferrer"> TheCocktailDB</a>.
                </p>
            </section>
            <Footer />
        </div>
    );
}

export default About;
