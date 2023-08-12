import { useState } from 'react'
import foods from './foods.json'
import FoodBox from './Components/FoodBox';
import AddFoodForm from './Components/AddFoodForm';

function App() {
  const [food, setFood] = useState(foods);

  return (
    <div className="App">
      <AddFoodForm />
      <FoodBox
        food={food}
      />
    </div>
  )
}

export default App
