import { combineReducers } from 'redux';
import board from './board';

// const appReducer = combineReducers({
// 	board
// });

// const rootReducer = (state, action) => {
// 	if (action.type === 'RESTART_GAME') {
// 		return undefined;
// 	}

// 	return appReducer(state, action);
// };

// export default rootReducer;

export default combineReducers({
	board
});
