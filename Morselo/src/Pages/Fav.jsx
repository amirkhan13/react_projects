import React, { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Card from '../Components/Card';

function Fav() {
    const [favs, setFavs] = useState([]);

    useEffect(() => {
        const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];

        setFavs(storedFavs);
    }, []);

    return (
        <div>
            <NavBar />

            <h1 style={{ marginLeft: "50px", marginTop: "30px", fontSize: "28px" }}>
                Favourite Recipes
            </h1>

            <div
                className="cards"
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    margin: "30px 50px",
                    minHeight: "50vh",
                }}
            >
                {Array.isArray(favs) && favs.length > 0 ? (
                    favs.map((item) => (
                        <Card
                            key={item.id}
                            data={{
                                id: item.id,
                                name: item.name,
                                img: item.img,
                            }}
                            category={item.category}
                        />
                    ))
                ) : (
                    <p style={{ fontSize: "18px", color: "gray" }}>
                        No favourites yet. Start adding some recipes! 🍲
                    </p>
                )}
            </div>

            <Footer />
        </div>
    );
}

export default Fav;
