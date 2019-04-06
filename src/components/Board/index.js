import Board from './Board';
import { connect } from 'react-redux';
import { checkIfHasWinner, playTurn, checkIfDraw, restartGame } from './actions';

const mapStateToProps = ({ board }) => ({
	currentPlayer: board.currentPlayer,
	boardArr: board.boardArr,
	gameOver: board.gameOver,
	opponent: board.opponent
});

const mapDispatchToProps = (dispatch) => ({
	checkIfHasWinner: (boardArr) => dispatch(checkIfHasWinner(boardArr)),
	checkIfDraw: (boardArr) => dispatch(checkIfDraw(boardArr)),
	playTurn: (boardArr) => dispatch(playTurn(boardArr)),
	restartGame: () => dispatch(restartGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
