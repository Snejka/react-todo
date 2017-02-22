import React, {Component} from 'react';
import {connect} from 'react-redux';
import TodoSingle from 'TodoSingle';

export var TodoList = React.createClass({
    render: function () {
        var {todos} = this.props;

        var renderTodos = function() {

            if(todos.length === 0){
                return(
                    <p className="container__message">Nothing To Do</p>
                );
            }

            return todos.map(function (todo) {
                //console.log(todo);
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

export default connect(
    (state) => {
        return {
            todos: state.todos
        }
    }
)(TodoList);
