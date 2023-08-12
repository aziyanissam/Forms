import { useState } from 'react'
import foods from './foods.json'
import FoodBox from './Components/FoodBox';
import AddFoodForm from './Components/AddFoodForm';

function App() {
  const [food, setFood] = useState(foods);


  const addNewFood = (newItem) => {
    const updatedFood = [...food, newItem];
    setFood(updatedFood)
  }

  return (
    <div className="App">
      <AddFoodForm addNewFood={addNewFood}
      />
      <FoodBox
        food={food}

      />
    </div>
  )
}

export default App
