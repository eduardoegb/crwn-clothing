import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shop/Shop';
import SigninPage from './pages/SigninPage/SigninPage';

function App() {
  return (
    <div className="App">
			<Header/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
				<Route exact path="/signin" component={SigninPage} />
      </Switch>
    </div>
  );
}

export default App;
