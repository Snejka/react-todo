var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
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
                    completed: false    //sets completed to false for each new todo created - default
                }
            ]
        })
    },

    handleToggle: function(id){
        // alert(id);
        var updatedTodos = this.state.todos.map((todo)=>{   //map through all values from todos
            if(todo.id === id){                             //copmare the maped todo.id with the receved id
                todo.completed = !todo.completed;           //changes the value of todo.completed with the oposite of the current value
            }
            return todo;                                    //returns the modified todo which is the value of updatedTodos
        });
        this.setState({todos: updatedTodos});               //changed the value of the current state with the value of updatedTodos
    },

    render: function () {
        var {todos, showCompleted, searchText} = this.state;
        //console.log(todos, showCompleted, searchText);
        var filteredTodos= TodoAPI.fileterTodos(todos, showCompleted, searchText);
        //console.log(todos);
        // console.log(handleAddTodo);
        return (
          <div>
            <TodoSearch onSearch={this.handleSearch} />
            <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
            <AddTodo onAddTodo={this.handleAddTodo} />
          </div>
        )
    }
});

module.exports = TodoApp;
