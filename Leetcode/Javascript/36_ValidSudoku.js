/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let row = new Map();
    let column = new Map();
    let box = new Map();

    let pos = {
        0: 'A',
        1: 'A',
        2: 'A',
        3: 'B',
        4: 'B',
        5: 'B',
        6: 'C',
        7: 'C',
        8: 'C'
    }

    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            if(board[i][j] != '.') {
                if (row.has(board[i][j])) return false;
                row.set(board[i][j]);

                if (column.has(j+board[i][j])) return false;
                column.set(j+board[i][j]);

                if (box.has(pos[i] + pos[j] + board[i][j])) return false;
                box.set(pos[i] + pos[j] + board[i][j]);
            } 
        }
        row.clear();
    }

    return true;
};