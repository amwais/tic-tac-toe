import Board from './Board';
import { connect } from 'react-redux';
import { checkIfHasWinner } from './actions';

const mapStateToProps = ({ board }) => ({
	currentPlayer: board.currentPlayer,
	boardArr: board.boardArr
});

const mapDispatchToProps = (dispatch) => ({
	checkIfHasWinner: (boardArr) => dispatch(checkIfHasWinner(boardArr))
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
