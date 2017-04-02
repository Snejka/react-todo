import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';
const actions = require('actions');
const store = require('configureStore').configure();
import Login from 'Login';

store.dispatch(actions.startAddTodos());

//Load Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!appStyles');

ReactDOM.render(
   	<Provider store={store}>
   		<Router history={hashHistory}>
   			<Route path="/">
   				<Route path="todos" component={TodoApp} />
   				<IndexRoute component={Login} />
   			</Route>
    	</Router>
   	</Provider>,
  document.getElementById('app')
);
