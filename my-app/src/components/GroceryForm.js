import React from 'react';
import FridgeCard from './FridgeCard.js'

class GroceryForm extends React.Component {
    state={
        itemName:'',
        mealType:'Breakfast'
    }
    handleChange = (e) => {
        // console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.addGroceryItem(this.state)
        this.setState({
            itemName: '',
            mealType: '',
        })

    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={(e) => (this.handleChange(e))} value={this.state.itemName} type='text' name='itemName'/>
                <select onChange={(e) => (this.handleChange(e))}value={this.state.mealType} name='mealType' >
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch </option>
                    <option value="Dinner">Dinner</option>
                </select>
                <input type="submit" value='AddGroceryItem'/>
            </form>
            
        )
    }
}
export default GroceryForm