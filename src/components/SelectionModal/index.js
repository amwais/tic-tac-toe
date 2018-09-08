import SelectionModal from './SelectionModal';
import { connect } from 'react-redux';
import { handleStartGame } from '../Board/actions';

const mapStateToProps = ({ board }) => ({
	currentPlayer: board.currentPlayer,
	boardArr: board.boardArr,
	gameOver: board.gameOver
});

const mapDispatchToProps = (dispatch) => ({
	handleStartGame: (opponent, symbol) => dispatch(handleStartGame(opponent, symbol))
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectionModal);
