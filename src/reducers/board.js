import { handleArrayChange } from '../components/Board/actions';

const initialState = {
	currentPlayer: 1,
	boardArr: [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	winningSquares: [],
	winner: 0,
	gameOver: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'SET_SQUARE':
			return {
				...state,
				boardArr: handleArrayChange(state.boardArr, action.payload, state.currentPlayer),
				currentPlayer: state.currentPlayer === 1 ? 2 : 1
			};
		case 'SET_WINNER':
			return {
				...state,
				currentPlayer: 0,
				winningSquares: action.payload.markedIds,
				gameOver: true
			};
		case 'RESTART_GAME':
			return {
				initialState
			};
		default:
			return { ...state };
	}
};
