import React from 'react'


const ProductCard = ({
    title,
    price,
    img,
    category,
    rating,
    onAddToCart

}) => {
    return (

        <div className="prodcut-card " style={{
            border: "2px solid yellow",

            width: "15%",
            height: "30%"
        }}>
            <img src={img} alt={title} style={{
                width: "100%",
                height: "30%"
            }} />

            <h3>{title}</h3>

            <p className='category'>{category}</p>
            <p className='price'>{price}</p>
            <p className='rating'>{rating}</p>

            <button onClick={onAddToCart}>
                Add to Cart
            </button>
        </div>
    )
}



export default React.memo(ProductCard)


