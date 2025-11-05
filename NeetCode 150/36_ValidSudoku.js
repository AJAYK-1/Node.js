// Determine if a 9x9 sudoku board is valid. Only the filled cells need to be validated according to the following rules:
// 1-> Each row must contain the digits 1-9 without repetition.
// 2-> Each column must contain the digits 1-9 without repetition.
// 3-> Each of the nint 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

const validSudoku = board => {
    if (board.length === 0) return board
    let rows = [[], [], [], [], [], [], [], [], []]
    let column = [[], [], [], [], [], [], [], [], []]
    let box = [[], [], [], [], [], [], [], [], []]

    for (let r = 0; r < board.length; r++)
        for (let c = 0; c < board.length; c++) {
            if (board[r][c] == '.') continue;
            if (rows[r].includes(board[r][c])) return false
            else rows[r].push(board[r][c])

            if (column[c].includes(board[r][c])) return false
            else column[c].push(board[r][c])

            const idx = Math.floor(r / 3) * 3 + Math.floor(c / 3)
            if (box[idx].includes(board[r][c])) return false
            else box[idx].push(board[r][c])
        }
    return true
}

const board1 = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
console.log(validSudoku(board1));

const board2 = [
    ["1", ".", "2", "6", "3", "4", ".", "5", "."],
    ["2", "3", "4", "5", "6", "7", "8", "9", "."],
    [".", ".", "2", ".", ".", ".", ".", "8", "."],
    [".", "1", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", "9", ".", ".", ".", ".", ".", "7"],
    [".", ".", "8", ".", ".", ".", ".", ".", "6"],
    [".", ".", ".", "6", ".", ".", ".", ".", "1"],
    [".", ".", ".", "1", ".", ".", ".", "3", "."],
    [".", "2", ".", ".", ".", ".", "1", ".", "3"]
];
console.log(validSudoku(board2));
