import Board from './Board';
import { connect } from 'react-redux';
import { checkIfHasWinner, playTurn } from './actions';

const mapStateToProps = ({ board }) => ({
	currentPlayer: board.currentPlayer,
	boardArr: board.boardArr,
	gameOver: board.gameOver,
	opponent: board.opponent
});

const mapDispatchToProps = (dispatch) => ({
	checkIfHasWinner: (boardArr) => dispatch(checkIfHasWinner(boardArr)),
	playTurn: (boardArr) => dispatch(playTurn(boardArr))
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
