import React, { Component } from 'react';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import Board from './components/Board.js';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<header className="App-header">
						<h1 className="App-title">X / O</h1>
					</header>
					<Board className="board" />
				</div>
			</Provider>
		);
	}
}

export default App;
