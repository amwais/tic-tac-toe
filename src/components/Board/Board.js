import React, { Component } from 'react';
import Square from '../Square';

export default class Board extends Component {
	componentDidUpdate() {
		this.props.checkIfHasWinner(this.props.boardArr);
	}

	render() {
		const style = {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center',
			marginTop: '50px',
			marginBottom: '100px'
		};

		const lineBreak = {
			width: '100%'
		};
		return (
			<div>
				<div style={style}>
					<p>Current Player: {this.props.currentPlayer < 2 ? 'X' : 'O'}</p>
					<div style={lineBreak} />
					<Square id="0" />
					<Square id="1" />
					<Square id="2" />
					<div style={lineBreak} />
					<Square id="3" />
					<Square id="4" />
					<Square id="5" />
					<div style={lineBreak} />
					<Square id="6" />
					<Square id="7" />
					<Square id="8" />
				</div>
			</div>
		);
	}
}
