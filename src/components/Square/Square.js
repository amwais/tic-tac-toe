import React, { Component } from 'react';
import './styles.css';

export default class Square extends Component {
	render() {
		// console.log(this.props);

		const style = {
			border: '5px solid blue',
			height: '150px',
			width: '150px',
			display: 'flex',
			justifyContent: 'center'
		};

		const WinnerStyle = {
			...style,
			backgroundColor: 'green'
		};

		const symbolStyle = {
			margin: '0px',
			paddingBottom: '10px',
			fontSize: '10em'
		};

		const symbolJsx = (
			<h1 style={symbolStyle}>
				{this.props.boardArr[this.props.id] > 0 ? this.props.boardArr[this.props.id] === 1 ? (
					'X'
				) : (
					'O'
				) : (
					undefined
				)}
			</h1>
		);

		const emptySquareJsx = (
			<button
				className="square"
				onClick={() => {
					this.props.handleSetSquare(this.props.id);
				}}
			/>
		);

		return (
			<div
				id={this.props.id}
				style={this.props.winningSquares.includes(parseInt(this.props.id, 10)) ? WinnerStyle : style}
				className="square-container"
			>
				{this.props.boardArr[this.props.id] > 0 ? symbolJsx : emptySquareJsx}
			</div>
		);
	}
}
