import React, {Component} from 'react';
import {connect} from 'react-redux';
import TodoSingle from 'TodoSingle';
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
    render: function () {
        const {todos, showCompleted, searchText} = this.props;

        const renderTodos = function() {
            const filteredTodos = TodoAPI.fileterTodos(todos, showCompleted, searchText);

            if(filteredTodos.length === 0){
                return(
                    <p className="container__message">Nothing To Do</p>
                );
            }

            return filteredTodos.map((todo) => {

                return (
                    <TodoSingle key={todo.id} {...todo}/>
                );
            });
        };

        return (
          <div>
            {renderTodos()}
          </div>
        )
    }
});

const mapStateToPrps = (state) => {
    return state;
};

export default connect(mapStateToPrps)(TodoList);
