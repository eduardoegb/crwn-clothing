import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shop/Shop';
import SigninPage from './pages/SigninPage/SigninPage';
import { auth } from './firebase/firebase';

class App extends Component {
	constructor() {
		super();
		this.state = {
			currentUser: null
		}
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			this.setState({currentUser: user})
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {	
		return (
			<div className="App">
				<Header currentUser={this.state.currentUser}/>
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/shop" component={ShopPage} />
					<Route exact path="/signin" component={SigninPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
