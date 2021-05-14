import React from 'react';

class FridgeCard extends React.Component {

    render(){
        // const { itemName, expirationDate, meal } = this.props.item
    return(
        <div>
            <p>{this.props.item.itemName}</p>
            <p>{this.props.item.expirationDate}</p>  
            <p>{this.props.item.meal}</p>
            <button>Remove Item</button>
        </div>
            )
        'merp'
    }
}

export default FridgeCard