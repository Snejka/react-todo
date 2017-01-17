var React = require('react');
var TodoSingle = require('TodoSingle');

var TodoList = React.createClass({
    render: function () {
        var {todos, onToggle} = this.props;

        var renderTodos = function() {
            return todos.map(function (todo) {
                //console.log(todo);
                return (
                    <TodoSingle key={todo.id} {...todo} onToggle={onToggle}/>
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
