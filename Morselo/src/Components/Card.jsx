import React from 'react'
import '../card.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import RecpieContext from '../Contexts/RecpieContext'

function Card({data , category}) {
  const navigate = useNavigate()
  const {setCategory} = useContext(RecpieContext)

  const handleClick =()=>{
    setCategory(category);

    navigate(`/details/${category}/${data.id} `)
  }
  return (
    <div className='meal-details' onClick={handleClick}>
        <div className="meal-img">

        <img  src={data.img} alt={data.name} />
        </div>
        <div className="meal-name">

        <h3>{data.name}</h3>
        </div>
      
    </div>
  )
}

export default Card 

