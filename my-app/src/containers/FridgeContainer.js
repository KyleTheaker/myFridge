import React from 'react';
import FridgeCollection from '../components/FridgeCollection';
import FridgeForm from '../components/GroceryForm.js';

class FridgeContainer extends React.Component {
    


    render(){
        return(
            <div>
                <FridgeCollection items={this.props.filteredItems}/>
                <FridgeForm items={this.props.filteredItems}/>
            </div>
        )
    }
}
export default FridgeContainer