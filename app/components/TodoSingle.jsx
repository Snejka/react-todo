import React, {Component} from 'react';
import {connect} from 'react-redux';
const actions = require('actions');
const moment = require('moment');

export class TodoSingle extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {text, id, completed, createdAt, completedAt, dispatch} = this.props;
        const todoClassName = completed ? 'todo todo-completed' : 'todo';
        const renderDate = () => {
            let timestamp = createdAt;
            let message = 'Created ';

            if(completed){
                timestamp = completedAt;
                message = 'Compleated ';
            }

            return message + moment.unix(timestamp).format('MMM Do YY @ h:mm A');
        }

        return (
            <div className={todoClassName} onClick={ () => {dispatch(actions.toggleTodo(id))}}>
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
}

export default connect()(TodoSingle);
