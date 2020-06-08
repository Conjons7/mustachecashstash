import React, { Component } from "react";
import TodoItems from './TodoItems';


class AddTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);   
    }

    addItem(event) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
                
            };
           
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        
        }
        this._inputElement.value = "";

        console.log(this.state.items);
      
        event.preventDefault();
    }

    // updateTodo(title) {
    //     this.setState(prevState => {
    //         if (id === todo)
    //     })
    // }

    render() {
      return(
        <div className='Container'>
            <h1 className='text-light' style={{color: "white"}}>Very Simple ToDo App</h1>
            <p className='text-light' style={{color: "white"}}>Track all of the things</p>
            <hr />
            <div className='row'>
                
                <div className='col-sm-4'>
                    <div className='card card-default'>
                        <div className='card-heading'>Add New Todo</div>
                        <div className='card-body'>
                            <p>I want to...</p>
                        </div>
                        <div className='header'>
                            <form onSubmit={this.addItem}>
                            <input ref={(a) => this._inputElement = a}
                                placeholder="enter task">
                                </input>
                            <button type='submit'>ADD</button>
                            </form>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>

                <div className='col-sm-8'> 
                    <div className="card card-default">
                    <TodoItems entries={this.state.items}/>
                    </div>
                </div>
            </div>
        </div>
        );
    }


}


export default AddTodo;