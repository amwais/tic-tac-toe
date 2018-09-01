import Square from './Square';
import { connect } from 'react-redux';
import { handleSetSquare } from './actions';

const mapStateToProps = ({ board }) => ({
	currentPlayer: board.currentPlayer,
	boardArr: board.boardArr,
	winningSquares: board.winningSquares
});

const mapDispatchToProps = (dispatch) => ({
	handleSetSquare: (id) => {
		dispatch(handleSetSquare(id));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Square);
