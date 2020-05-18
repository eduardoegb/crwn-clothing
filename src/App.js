import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shop/Shop';
import SigninPage from './pages/SigninPage/SigninPage';
import { auth, createUserProfileDoc } from './firebase/firebase';
import { setCurrentUser } from './redux/user/userActions';

class App extends Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
	const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDoc(userAuth);

				userRef.onSnapshot(snapShot => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					})
				});
			}
			else {
				setCurrentUser(userAuth)
			}
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {	
		const { currentUser } = this.props;

		return (
			<div className="App">
				<Header/>
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/shop" component={ShopPage} />
					<Route exact path="/signin"
						render={() => 
							currentUser?
							<Redirect to="/"/>
							:<SigninPage />
						}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});

// const mapDispatchToProps = {
// 	setCurrentUser
// };


export default connect(mapStateToProps, mapDispatchToProps)(App);
