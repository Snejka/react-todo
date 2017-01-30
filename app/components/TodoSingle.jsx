var React = require('react');
var moment = require('moment');

var TodoSingle = React.createClass({
    render: function () {
        var {text, id, completed, createdAt, completedAt} = this.props;
        var todoClassName = completed ? 'todo todo-completed' : 'todo';
        var renderDate = () => {
            var timestamp = createdAt;
            var message = 'Created ';

            if(completed){
                timestamp = completedAt;
                message = 'Compleated ';
            }

            return message + moment.unix(timestamp).format('MMM Do YY @ h:mm A');
        }

        return (
            <div className={todoClassName} onClick={ () => {this.props.onToggle(id)}}>
                { /*pass the value of id to the onToggle property*/}
                <div>
                    <input  type="checkbox" checked={completed} />
                </div>
                <div>
                    <p>{text}</p>
                    <p  className="todo__subtext">{renderDate()}</p>
                </div>
          </div>
        )
    }
});

module.exports = TodoSingle;
