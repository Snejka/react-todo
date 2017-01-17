var React = require('react');

var TodoSingle = React.createClass({
    render: function () {
        var {text, id, completed} = this.props;

        return (
            <div onClick={
                () => {this.props.onToggle(id)}             //pass the value of id to the onToggle property
            }>
            <input type="checkbox" checked={completed} />
            <label>
                {text}
            </label>
          </div>
        )
    }
});

module.exports = TodoSingle;
