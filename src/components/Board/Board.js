import React, { Component } from 'react';
import Square from '../Square';
import Confetti from 'react-confetti';
import SelectionModal from '../SelectionModal';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';

export default class Board extends Component {
	componentDidUpdate() {
		if (
			!this.props.checkIfHasWinner(this.props.boardArr) &&
			!this.props.checkIfDraw(this.props.boardArr) &&
			this.props.currentPlayer === this.props.opponent
		) {
			setTimeout(() => {
				this.props.playTurn(this.props.boardArr);
			}, 1500);
		}
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
				<SelectionModal />
				<div
					hidden={this.props.gameOver ? false : true}
					style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
				>
					<Confetti width={window.innerWidth} height={window.innerHeight} />
				</div>
				<Button
					icon="refresh"
					color="green"
					size="mini"
					className="start-btn"
					onClick={() => window.location.reload()}
					style={{
						width: '10%',
						display: 'block',
						verticalAlign: 'middle',
						margin: 'auto',
						marginTop: '20px'
					}}
				/>
				<div style={style}>
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
