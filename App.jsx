import React, { Component } from 'react';
import AddTodo from './addTodo/AddTodo';
//now

class App extends React.Component {
  
  render() {
    return(
      <div className='container'>
        <div className='row'>
          <div className="col-md-4">
            <div className='panel panel-default'>
              <div>
                <AddTodo addTodoFn={this.addTodo}></AddTodo>
              </div>
            </div>
          </div>
          
          <div className="col-md-8">
            <div className="panel panel-default">
              <div className="alert alert-success">
              
              </div>
            </div>

          </div>
        </div>
      </div>
      
    );
    
  }


  
  

}


export default App;




