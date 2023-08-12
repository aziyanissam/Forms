import React from 'react'

function FoodBox({ food }) {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {food.map((item) => (
                <div style={{ border: '1px solid black', width: '300px', margin: '10px' }}>
                    <h1>{item.name}</h1>
                    <img src={item.image} alt="" style={{ width: '100px' }} />
                    <h4>Calories: {item.calories}</h4>
                    <h4>Servings: {item.servings}</h4>
                    <h3>Total Calories: {item.calories}</h3>
                    <button>Delete</button>
                </div>
            ))
            }
        </div>
    )
}

export default FoodBox
