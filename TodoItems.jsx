import React, { Component } from "react";

class TodoItems extends React.Component {
    createTasks(item) {
        return <div key={item.key}>{item.text}</div>
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <div className="theList">
                <div classname='panel panel-default'>
                {listItems}
                </div>
            </div>

        );
    }

}


export default TodoItems;