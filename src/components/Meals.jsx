import React from 'react';
import { useGlobalContext } from '../Context';
import Card from 'react-bootstrap/Card';
function Meals() {
  const {meals,search} = useGlobalContext();

  const filteredMeals = meals.filter((meals)=> meals.strMeal.toLowerCase().includes(search.toLowerCase()))


  return (
  <>
    <div className='container'>
      <div className='row g-2'>
        {filteredMeals.map((meal) => <div key={meal.idMeal} className='col'> <Card  style={{ width: '18rem' }}>
            <Card.Img variant="top" src={meal.strMealThumb} />
            <Card.Body>
              <Card.Title>{meal.strMeal}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
    </Card></div>)}
      </div>
    </div>
  </>  
  )
}

export default Meals;