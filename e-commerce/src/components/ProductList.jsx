import React, { useMemo, useState, useCallback, useEffect } from 'react'
import ProductCard from './ProductCard'

function ProductList() {

    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")



    const fetchProducts = async () => {
        try {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            console.log("data", data);
            setProducts(data)


        } catch (error) {
            console.log("error:", error)



        }
    }
    // const filteredProducts = useMemo(() => {
    //     return products.filter((product) => {
    //         product.title.toLowerCase().includes(search.toLowerCase())
    //     })
    // }, [products, search])

    const filteredProducts = useMemo(() => {
        return products.filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase())
        );
    }, [products, search]);


    const handleAddToCart = useCallback((product) => {
        console.log("Added to cart:", product.title);
    }, []);


    useEffect(() => {
        fetchProducts()

    }, [])




    return (
        <div>

            <input
                type="text"
                placeholder='search a product'
                value={search}
                onChange={(e) => setSearch(e.target.value)}


            />

            <div className="product-grid">
                {
                    filteredProducts.map((product) => {
                        return <ProductCard
                            key={product.id}
                            tile={product.title}
                            price={product.price}
                            img={product.image}
                            category={product.category}
                            rating={product.rating?.rate}
                            onAddToCart={() => handleAddToCart(product)}
                        />
                    })
                }
            </div>

        </div>
    )
}

export default ProductList

