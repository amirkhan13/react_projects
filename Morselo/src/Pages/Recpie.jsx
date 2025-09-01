import React, { useState, useEffect } from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Card from '../Components/Card';
import Loader from '../Components/Loader';

function Recpie() {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    const fetchRecpies = async () => {
        setLoading(true);
        try {
            let fetchedMeals = [];
            for (let i = 0; i < 18; i++) {
                const res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
                const data = await res.json();
                fetchedMeals.push(data.meals[0]);
            }
            setMeals(fetchedMeals);
            setError("");
        } catch (error) {
            setError(error || "Error fetching the Recipes");
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchRecpies()
    }, [])

    if (loading) return <Loader />

    return (
        <div>
            <NavBar />
            <h1 style={{ marginLeft: "50px", marginTop: "30px" }}>Recipes</h1>

            <div className="cards" style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginLeft: "50px", marginTop: "30px" }}>

                {
                    Array.isArray(meals) && meals.map((item) => (
                        <Card key={item.idMeal} data={{
                            id: item.idMeal,
                            name: item.strMeal,
                            img: item.strMealThumb,
                        }}
                            category={"meal"}
                        />
                    ))
                }
            </div>

            <Footer />

        </div>
    )
}

export default Recpie
