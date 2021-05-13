import React from 'react';
import FridgeCollection from './FridgeCollection.js';
import FridgeForm from './FridgeForm.js';
const URL = 'http://localhost:3000/items'
class FridgeContainer extends React.Component {
    
    state ={
        items:[],
        filteredItems:[]
    }
    componentDidMount(){
        fetch(URL)
            .then(res => res.json())
            .then(foodArr => this.setState({items: foodArr, filteredItems: foodArr}))
    }
    render(){
        return(
            <div>
                <FridgeCollection items={this.state.filteredItems}/>
                <FridgeForm />
            </div>
        )
    }
}
export default FridgeContainer