import React from 'react';
import './Inventory.css'

const Inventory = () => {
    const handleAddInventory = () => {
        
    }
    return (
        <div className="inventory">
            <h1>Add Inventory to sell more...</h1>
            <button onClick={handleAddInventory}>Add Inventory</button>
        </div>
    );
};

export default Inventory;