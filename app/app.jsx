var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var TodoApp = require('TodoApp');

// var TodoSingle = require('TodoSingle');

//Load Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

ReactDOM.render(
  // <Router history={hashHistory}>
  //   <Route path="/" component={Main}>
  //       <Route path='about' component={About}/>
  //       <Route path='examples' component={Examples}/>
  //       <IndexRoute component={Weather}/>
  //   </Route>
  // </Router>
  <TodoApp />,
  document.getElementById('app')
);
