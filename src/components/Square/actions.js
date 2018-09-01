export const handleSetSquare = (id) => (dispatch) => {
	dispatch({
		type: 'SET_SQUARE',
		payload: id
	});
};
