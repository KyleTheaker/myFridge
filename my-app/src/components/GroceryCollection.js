import React from 'react';
import GroceryCard from './GroceryCard'


class GroceryCollection extends React.Component {

    render(){
        return(
            <div>
            {this.props.items.map(item => <GroceryCard key={item.id} item={item} />)}
            </div>
            )
    }
}
export default GroceryCollection