import React from "react";

const NavBar = () => {
    return(
        <div classname="navWrapper">
            <span className="headerText">MyFridge</span>
            <div>
            <img src={'https://cdn.dribbble.com/users/135789/screenshots/2977186/little_fridge.gif'} className="App-logo" alt='fridge'/>
            <button id="groceryButton">Grocery List</button>
            <button id="fridgeButton">Fridge</button>
            </div>
        </div>
    );
};
export default NavBar 