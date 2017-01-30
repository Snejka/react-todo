var React = require('react');

var AddTodo = React.createClass({
    handleSubmit: function(e){
        e.preventDefault();
        var todoText = this.refs.todoText.value;

        if(todoText.length > 0){
            this.refs.todoText.value = '';
            this.props.onAddTodo(todoText);
        } else {
            this.refs.todoText.focus();//Leave teh cursur inside the input text
        }
    },
    render: function() {
        //var {handleAddTodo} = this.props;
        return (
            <footer className="container__footer">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="todoText" placeholder="Add todo..." />
                    {/*ref='' id from react - allows us to access the value*/}
                    <button className="button expanded">Add</button>
                </form>
            </footer>
        )
    }
});

module.exports = AddTodo;
