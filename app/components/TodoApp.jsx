var React = require('react');
var TodoList = require('TodoList');


var TodoApp = React.createClass({

    getInitialState: function() {
        return {
            todos: [
                {
                    id: 1,
                    text: 'walk the dog'
                } , {
                    id:2,
                    text: 'Clean the Yard'
                }
            ]
        }
    },

    render: function () {
        var {todos} = this.state;
        // console.log(todos);
        return (
          <div>
             <TodoList todos={todos}/>
          </div>
        )
    }
});

module.exports = TodoApp;
