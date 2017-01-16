var React = require('react');

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
        return (
          <div>
            TodoApp.jsx
          </div>
        )
    }
});

module.exports = TodoApp;
