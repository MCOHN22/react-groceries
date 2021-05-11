import React, { Component } from 'react';
//Must have grocery items in this shape. 

// {
//   item: '',
//   brand '',
//   units: '',
//   quantity: 0,
//   isPurchased: false
// }

class Groceries extends Component {
   constructor(){
       super()
       this.state={
           item: '', 
           brand:'', 
           units:'',
           quantity:0, 
           isPurchased: false

       }
   } 
   changeUserInput=(input)=>{
    this.setState({
        userInput: input
    }, 
        () => console.log(input)
        )    
    } 
   handleChange =(eventToBeChanged) =>{
        
        
    this.setState(
        {
            [eventToBeChanged.target.id]: eventToBeChanged.target.value
        }
    )
    console.log(eventToBeChanged.target.value)
}

//this function grabs the user input and sends it into state
  
// take the user input from tstate and add to the list. // Make an array of 3 objects using the above share
// and render the item quantity and units (12 pack, 1lb, 2 liters, etc.)
addToList(input){ 
    //need a variable to act as the list in state 
    let listArray= this.state.list
    listArray.push(input)
    this.setState({
        list:listArray,
        userInput:''
    },)
    }

// Make inputs so that new items can be added


// Conditionally render the grocery items based on whether or not they were purchased (ok to have hard coded values for isPurchased)


// Add some style to your app
   
    render() {
        return (
            <div>
   <h1>Welome to React Groceries</h1> 
   
{/*use .map to map over products and create a new li for each*/}
<form action="name">
            <input type="text" value={this.state.value} onChange= {this.handleChange} id="items"/>

            <label htmlFor="units"></label>
            <input type="number" value={this.state.value} onChange= {this.handleChange} id="units"/>

            <label htmlFor="description"></label>
            <input type="textarea" value={this.state.value} onChange= {this.handleChange} id="quantity"/>

            </form>

            <div>
            <h2>Preview of your new Item</h2>
            <h3>{this.state.item}</h3>
            <h4>{this.state.unit}</h4>
            <h5>{this.state.quantity}</h5>
            </div>   
                <div>
                <input type="text" value={this.state.userInput} 
                
                onChange={
                    (event)=>{
                        this.changeUserInput(event.target.value)}
                }/>
                <button onClick={()=>this.addToList(this.state.userInput)}>Add to Grocery List</button>
            
                </div>
            </div>
        );
    }
}

export default Groceries;