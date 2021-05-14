import React from 'react';
// import GroceryCard from '../components/GroceryCard';
import GroceryCollection from '../components/GroceryCollection'
import GroceryForm from '../components/GroceryForm'

class GroceryContainer extends React.Component {

    render(){
        return(
        <div>
            <GroceryForm addGroceryItem={this.props.addGroceryItem}/>
            <GroceryCollection items={this.props.items}/>
            
            {/* <GroceryCard items={this.props.filteredItems}/> */}
        </div>
        )
    }
}
export default GroceryContainer