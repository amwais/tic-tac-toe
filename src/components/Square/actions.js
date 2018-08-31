export const handleSetSquare = (id) => (dispatch) => {
	console.log(id);

	dispatch({
		type: 'SET_SQUARE',
		payload: id
	});
};
