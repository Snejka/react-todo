var React = require('react');

var TodoSingle = React.createClass({
    render: function () {
        var {text, id} = this.props;

        return (
          <div>
            {id}. {text}
          </div>
        )
    }
});

module.exports = TodoSingle;
