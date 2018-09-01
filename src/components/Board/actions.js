export const handleArrayChange = (boardArr, id, currentPlayer) => {
	boardArr.splice(id, 1, currentPlayer);
	return boardArr;
};

const test = (sequence, markedIds, dispatch) => {
	// console.log(markedIds);

	// console.log(sequence);

	if (sequence[0] > 0 && sequence.every((val, i, arr) => val === arr[0])) {
		dispatch({
			type: 'SET_WINNER',
			payload: {
				winner: sequence[0],
				markedIds
			}
		});
		return true;
	}
	return false;
};

export const checkIfHasWinner = (boardArr) => (dispatch) => {
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
	// console.log(sequences);
	for (let sequence in sequences) {
		sequence = sequences[sequence];

		if (test(sequence.seq, sequence.ids, dispatch)) {
			return;
		}
	}
};
