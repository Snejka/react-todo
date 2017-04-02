import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startLogin} from 'actions'

export class Login extends Component {

	constructor(props) {
	  super(props);
	  this.onLogin = this.onLogin.bind(this);
	}  

	onLogin() {	
		const {dispatch} = this.props;
		dispatch(startLogin());
  	}

	render() {
	    return (
	    	<div>
	    		<h1 className="page-title">Todo App</h1>
	    		<div className="row">
	    			<div className="columns small-centered small-11 medium-6 large-5">
	    				<div className="callout callout-auth">
		    				<h3>Login</h3>
		    				<p>Login with your GitHub Account</p>
		    				<button onClick={this.onLogin} className="button">Login</button>
	    				</div>
	    			</div>
	    		</div>
	        </div>
	    );
	}
};

export default connect()(Login);