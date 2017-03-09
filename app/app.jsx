import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import TodoApp from 'TodoApp';
var TodoAPI = require('TodoAPI');

const actions = require('actions');
const store = require('configureStore').configure();

store.dispatch(actions.startAddTodos());

//Load Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!appStyles');

ReactDOM.render(
   <Provider store={store}>
       <TodoApp />
   </Provider>,
  document.getElementById('app')
);
