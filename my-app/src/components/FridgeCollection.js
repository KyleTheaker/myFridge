import React from 'react';
import FridgeCard from './FridgeCard.js'

class FridgeCollection extends React.Component {

    render(){
        return(
            <div>

            {this.props.items.map(item => <FridgeCard key={item.id} item={item} />)}
            </div>
            )
    }
}
export default FridgeCollection