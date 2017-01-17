var React = require('react');
var TodoSingle = require('TodoSingle');

var TodoList = React.createClass({
    render: function () {
        var {todos} = this.props;

        var renderTodos = function() {
            return todos.map(function (todo) {
                return (
                    <TodoSingle key={todo.id}/>
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

module.exports = TodoList;
