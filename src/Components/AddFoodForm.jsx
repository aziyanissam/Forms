import React from 'react'

function AddFoodForm() {
    return (
        <div>
            <h3>Add Food Entry</h3>
            <form action="" style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Image</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Calories</label>
                    <input type="number" />
                </div>
                <div>
                    <label htmlFor="">Servings</label>
                    <input type="number" />
                </div>
                <button>Create</button>
            </form>
        </div>
    )
}

export default AddFoodForm
