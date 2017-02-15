import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import TodoApp from 'TodoApp';

//Load Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!appStyles');

// ReactDOM.render(
//    <TodoApp />,
//   document.getElementById('app')
// );

require('./redux-example.jsx');

// require('./redux-todo-example.jsx');

