import React from 'react';
import FridgeCollection from '../components/FridgeCollection';
import GroceryContainer from './GroceryContainer';


const URL = 'http://localhost:3000/items'

class FoodContainer extends React.Component {
    state ={
        items:[],
        filteredItems:[]
    }
    componentDidMount(){
        fetch(URL)
            .then(res => res.json())
            .then(foodArr => this.setState({
                items: foodArr, 
                filteredItems: foodArr
            }))
    }
    addGroceryItem(groceryitem){
        console.log(groceryitem)
        // let now = new Date();
        // let exp = now.setDate(now.getDate()+14)
        // // console.log(groceryitem)
        // const newItem ={...groceryitem, expirationDate : exp, purchased: false}
        const { itemName, mealType } = groceryitem
        const newItem = {
            itemName, 
            mealType
        }
        // }
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application-json',
                'Accept' : 'application-json'
            },
            body: JSON.stringify(newItem)
        }
        fetch(URL,config)
            .then(res => res.json())
            .then(newItem => {
                this.setState({
                    items: [newItem ,...this.state.items],
                    filteredItems: [newItem, ...this.state.filteredItems]
                })
            })
    }
    //items:
    render(){
        return(
                    <div>
                        {/* <div>
                        <FridgeCollection items={this.state.filteredItems}/>
                        </div> */}
                        <div>
                        <GroceryContainer addGroceryItem={this.addGroceryItem} items={this.state.filteredItems}/>
                        </div>
                    </div>
                )
        }
    }
export default FoodContainer