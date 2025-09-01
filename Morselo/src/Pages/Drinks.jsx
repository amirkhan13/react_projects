import React, { useState, useEffect } from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Card from '../Components/Card';
import Loader from '../Components/Loader';
function Drinks() {
    const [drinks, setDrinks] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")


    const fetchDrinks = async () => {
        setLoading(true);
        try {
            let fetchedDrinks = [];
            for (let i = 0; i < 18; i++) {
                const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
                const data = await res.json();
                fetchedDrinks.push(data.drinks[0]);
            }
            setDrinks(fetchedDrinks);
            setError("");
        } catch (error) {
            setError(error || "Error fetching the Recipes");
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchDrinks()
    }, [])

    if (loading) return <Loader />

    return (
        <div>
            <NavBar />
            <h1 style={{ marginLeft: "50px", marginTop: "30px" }}>Drinks</h1>

            <div className="cards" style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginLeft: "50px", marginTop: "30px" }}>

                {
                    Array.isArray(drinks) && drinks.map((item) => (
                        <Card key={item.idDrink} data={{
                            id: item.idDrink,
                            name: item.strDrink,
                            img: item.strDrinkThumb,

                        }}
                            category={"drink"}
                        />
                    ))
                }
            </div>

            <Footer />

        </div>
    )

}

export default Drinks
