var React = require('react');
var moment = require('moment');

var TodoSingle = React.createClass({
    render: function () {
        var {text, id, completed, createdAt, completedAt} = this.props;

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
            <div onClick={ () => {this.props.onToggle(id)}}>
                { /*pass the value of id to the onToggle property*/}
                <input  type="checkbox" checked={completed} />
                <label>
                    {text}<br />{renderDate()}
                </label>
          </div>
        )
    }
});

module.exports = TodoSingle;
