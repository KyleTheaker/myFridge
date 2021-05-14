import React from 'react';
class GroceryCard extends React.Component {

    render(){
        const { itemName, expirationDate, meal } = this.props.item
    return(
        <div>
            <p>{itemName}</p>
            <p>{expirationDate}</p>  
            <p>{meal}</p>
            <button>Remove Item</button>
            </div>
            )
        
    }
}

export default GroceryCard