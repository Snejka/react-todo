var React = require('react');
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
                    id: 1,
                    text: 'Walk the dog'
                } , {
                    id:2,
                    text: 'Clean the Yard'
                } , {
                    id:3,
                    text: 'Call Mom'
                } , {
                    id:4,
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
        alert('New todo: '+todoText);
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
