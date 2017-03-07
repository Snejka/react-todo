import React, {Component} from 'react';
import {connect} from 'react-redux';
const actions = require('actions');

export const TodoSearch = React.createClass({

    render: function(){

        const {dispatch, showCompleted, searchText} = this.props;

        return (
            <header className="container__header">
                <div>
                    <input type="text" ref="searchText" placeholder="Search for Todos..." value={searchText} onChange={() => {
                        let searchText = this.refs.searchText.value;
                        dispatch(actions.setSearchText(searchText));
                    }}/>
                </div>
                <div>
                    <lable>
                        <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
                            dispatch(actions.toggleShowCompleted());
                        }}/>
                        Show completed todos...
                    </lable>
                </div>
            </header>
        )
    }

});

const mapStateToProps = (state) => {
    return {
        showCompleted: state.showCompleted,
        searchText: state.searchText
    }
};

export default connect(mapStateToProps)(TodoSearch);
