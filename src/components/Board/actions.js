export const playTurn = (boardArr) => (dispatch) => {
	const almostWinningSequences = getAlmostWinningSequences(getSequences(boardArr));
	let selectedSquare = Math.floor(Math.random() * boardArr.length);
	let idxOfselectedSquare;

	if (Object.keys(almostWinningSequences).length > 0) {
		const randSeqToBlock = Math.floor(Math.random() * Object.keys(almostWinningSequences).length);
		let almostWinningSeq = almostWinningSequences[Object.keys(almostWinningSequences)[randSeqToBlock]];
		idxOfselectedSquare = almostWinningSeq.seq.indexOf(0);
		selectedSquare = almostWinningSeq.ids[idxOfselectedSquare];
	} else {
		while (boardArr[selectedSquare] > 0) {
			selectedSquare = Math.floor(Math.random() * boardArr.length);
		}
	}

	dispatch({
		type: 'SET_SQUARE',
		payload: selectedSquare
	});
};

export const handleArrayChange = (boardArr, id, currentPlayer) => {
	boardArr.splice(id, 1, currentPlayer);
	return boardArr;
};

export const handleStartGame = (opponent, symbol) => (dispatch) => {
	dispatch({
		type: 'START_GAME',
		payload: {
			currentPlayer: symbol === 'x' ? 1 : 2,
			opponent
		}
	});
};

const getAlmostWinningSequences = (sequences) => {
	let almostWinningSequences = {};

	for (let sequence in sequences) {
		let count = 0;
		const { ids, seq } = sequences[sequence];

		for (let i = 0; i < seq.length; i++) {
			if (seq[i] === 1) {
				// Check no 2 in seq
				count++;
			}
		}
		if (count > 1 && seq.indexOf(2) === -1) {
			almostWinningSequences[sequence] = {
				ids,
				seq
			};
		}
	}
	return almostWinningSequences;
};

const testWinningSequence = (sequence) => {
	if (sequence[0] > 0 && sequence.every((val, i, arr) => val === arr[0])) {
		return true;
	}
	return false;
};

const getSequences = (boardArr) => {
	const row1 = boardArr.slice(0, 3);
	const row2 = boardArr.slice(3, 6);
	const row3 = boardArr.slice(6);

	const col1 = [ boardArr[0], boardArr[3], boardArr[6] ];
	const col2 = [ boardArr[1], boardArr[4], boardArr[7] ];
	const col3 = [ boardArr[2], boardArr[5], boardArr[8] ];

	const diagonalLeftToRight = [ boardArr[0], boardArr[4], boardArr[8] ];
	const diagonalRightToLeft = [ boardArr[2], boardArr[4], boardArr[6] ];

	const sequences = {
		row1: {
			ids: [ 0, 1, 2 ],
			seq: row1
		},
		row2: {
			ids: [ 3, 4, 5 ],
			seq: row2
		},
		row3: {
			ids: [ 6, 7, 8 ],
			seq: row3
		},
		col1: {
			ids: [ 0, 3, 6 ],
			seq: col1
		},
		col2: {
			ids: [ 1, 4, 7 ],
			seq: col2
		},
		col3: {
			ids: [ 2, 5, 8 ],
			seq: col3
		},
		diagonalLeftToRight: {
			ids: [ 0, 4, 8 ],
			seq: diagonalLeftToRight
		},
		diagonalRightToLeft: {
			ids: [ 2, 4, 6 ],
			seq: diagonalRightToLeft
		}
	};
	return sequences;
};

export const checkIfDraw = (boardArr) => (dispatch) => {
	if (boardArr.indexOf(0) === -1) {
		dispatch({
			type: 'SET_DRAW'
		});
		return true;
	}
	return false;
};

export const checkIfHasWinner = (boardArr) => (dispatch) => {
	const sequences = getSequences(boardArr);
	for (let sequence in sequences) {
		sequence = sequences[sequence];

		if (testWinningSequence(sequence.seq, sequence.ids)) {
			dispatch({
				type: 'SET_WINNER',
				payload: {
					winner: sequence.seq[0],
					markedIds: sequence.ids
				}
			});
			return true;
		}
	}
	return false;
};
