const initialState = {
	currentPlayer: 1,
	boardArr: [ 1, 0, 0, 2, 0, 0, 0, 0, 0 ]
};

const handleArrayChange = (boardArr, id, currentPlayer) => {
	boardArr.splice(id, 1, currentPlayer);
	return boardArr;
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'SET_CURRENT_PLAYER':
			return {
				...state,
				currentPlayer: state.currentPlayer === 1 ? 2 : 1
			};
		case 'SET_SQUARE':
			return {
				...state,
				boardArr: handleArrayChange(state.boardArr, action.payload, state.currentPlayer),
				currentPlayer: state.currentPlayer === 1 ? 2 : 1
			};
		default:
			return { ...state };
	}
};
