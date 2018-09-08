import React, { Component } from 'react';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import Board from './components/Board';

class App extends Component {
	render() {
		let { currentPlayer } = store.getState().board;
		const currentPlayerStyle = {
			color: 'green'
		};
		store.subscribe(() => {
			currentPlayer = store.getState().board.currentPlayer;
			this.forceUpdate();
		});
		return (
			<Provider store={store}>
				<div className="App">
					<header className="App-header">
						<h1 className="App-title">
							<span className="symbol" style={currentPlayer === 1 ? currentPlayerStyle : undefined}>
								X
							</span>
							<span className="test">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
							<span className="symbol" style={currentPlayer === 2 ? currentPlayerStyle : undefined}>
								O
							</span>
						</h1>
					</header>
					<Board className="board" />
				</div>
			</Provider>
		);
	}
}

export default App;
