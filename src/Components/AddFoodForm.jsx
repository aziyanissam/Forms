import React, { useState } from 'react'

function AddFoodForm({ addNewFood }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);


    const handleSubmit = (e) => {
        e.preventDefault()
        const newItem = { name, image, calories, servings }
        addNewFood(newItem)
        setName('');
        setImage('');
        setCalories(0);
        setServings(0);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h3>Add Food Entry</h3>
            <form action="" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="">Image</label>
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />

                <label htmlFor="">Calories</label>
                <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} />

                <label htmlFor="">Servings</label>
                <input type="number" value={servings} onChange={(e) => setServings(e.target.value)} />
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default AddFoodForm
