import React, { Component } from 'react';

class Todo extends Component {
    constructor(){
        super()
        this.state= {
            
        }
    }
//this function grabs the user input and sends it into state
    changeUserInput=(input)=>{
        this.setState({
            userInput: input
        }, 
            () => console.log(input)
            )    
        }

// take the user input from tstate and add to the list
addToList(input){ 
//need a variable to act as the list in state 
let listArray= this.state.list
listArray.push(input)
this.setState({
    list:listArray,
    userInput:''
},)
}

    render() {
        return (
            <div>
                <h1>Hello Alien Worlds Happy Friday!</h1>
                <input type="text" value={this.state.userInput} 
                
                onChange={
                    (event)=>{
                        this.changeUserInput(event.target.value)}
                }/>
              <button onClick={()=>this.addToList(this.state.userInput)}>Add To-Do to this List</button>
              <button>Remove List Item</button>
            <ul>
                {this.state.list.map((itemInTheList,i)=>{
                return<li key={i}>{itemInTheList}</li>
    })}</ul>


{/* requirements=> make components render instead of just list items
requirements=> be able to strikethrough a todo when completed
Stretch goal=> be able to delete a todo off of the list     */
}
            
            </div>
        );
    }
}

export default Todo;