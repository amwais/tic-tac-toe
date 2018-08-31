import Board from './Board';
import { connect } from 'react-redux';

const mapStateToProps = ({ board }) => ({
	currentPlayer: board.currentPlayer,
	boardArr: board.boardArr
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
