import React from 'react';
import {connect} from 'react-redux';
const actions = require('actions');

export const AddTodo = React.createClass({

    handleSubmit: function(e){
        e.preventDefault();
        const todoText = this.refs.todoText.value;
        const {dispatch} = this.props;

        if(todoText.length > 0){
            this.refs.todoText.value = '';
            dispatch(actions.addTodo(todoText));
        } else {
            this.refs.todoText.focus();//Leave teh cursur inside the input text
        }
    },
    render: function() {
        //const {handleAddTodo} = this.props;
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

export default connect()(AddTodo);
