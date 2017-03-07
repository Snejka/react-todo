import React from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({

    getInitialState: function() {               //React function for initialising state
        return {
            showCompleted: false,               //default values - initial values
            searchText: '',                     //default values - initial values
            todos: TodoAPI.getTodos()           //Mockup data for initial state
        };
    },

    componentDidUpdate: function(prevProps, prevState) {        //Life Cicle Function for Copmponent
        TodoAPI.setTodos(this.state.todos);
    },

    handleSearch: function(showCompleted, searchText){
        this.setState({
            showCompleted,
            searchText: searchText.toLowerCase()
        });
    },

    handleAddTodo: function(todoText){
        // alert('New todo: '+todoText);
        this.setState({
            todos: [                    //creating new todos array
                ...this.state.todos,    //copy the previews state from todos array
                {                       //Adding the new object to the new totos array
                    id: uuid(),         //generates unique id
                    text: todoText,     //sets value of text to be the todoText from the input field
                    completed: false,   //sets completed to false for each new todo created - default
                    createdAt: moment().unix(),
                    completedAt: undefined,
                }
            ]
        })
    },

    render: function () {
        var {todos, showCompleted, searchText} = this.state;
        //console.log(todos, showCompleted, searchText);
        var filteredTodos = TodoAPI.fileterTodos(todos, showCompleted, searchText);
        //console.log(todos);
        // console.log(handleAddTodo);
        return (
            <div>
                <h1 className="page-title">ToDo App</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch onSearch={this.handleSearch} />
                            <TodoList/>
                            <AddTodo onAddTodo={this.handleAddTodo} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = TodoApp;
