var React = require('react');
var uuid = require('node-uuid');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({

    getInitialState: function() {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'Walk the dog'
                } , {
                    id: uuid(),
                    text: 'Clean the Yard'
                } , {
                    id: uuid(),
                    text: 'Call Mom'
                } , {
                    id: uuid(),
                    text: 'Go shoping'
                }
            ]
        }
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
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: todoText
                }
            ]
        })
    },

    render: function () {
        var {todos} = this.state;
        // console.log(todos);
        // console.log(handleAddTodo);
        return (
          <div>
            <TodoSearch onSearch={this.handleSearch}/>
            <TodoList todos={todos}/>
            <AddTodo onAddTodo={this.handleAddTodo} />
          </div>
        )
    }
});

module.exports = TodoApp;
