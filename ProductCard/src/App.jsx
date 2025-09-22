import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const products = [
    { name: "product1", price: 20, img: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/317396_0_Hd1wKDBH9.png?updatedAt=1757527018080" },

    { name: "product2", price: 200, img: "https://m.media-amazon.com/images/I/717Q2swzhBL._UF350,350_QL80_.jpg" },

    { name: "product3", price: 450, img: "https://oasis.opstatics.com/content/dam/oasis/page/2024/global/phones/13/specs/13-black.png" },
    { name: "product3", price: 450, img: "https://oasis.opstatics.com/content/dam/oasis/page/2024/global/phones/13/specs/13-black.png" },
  ]

  return (
    <>

      <div className="productCardContainer">
        <div className="productsGrid">
          {
            products.map((prod, i) => (



              <div className="products">


                <img src={prod.img} />
                <h2>{prod.name}</h2>
                <p>${prod.price}</p>

                <button>Add to Cart</button>
              </div>

            ))
          }
        </div>
      </div>

    </>
  )
}

export default App
