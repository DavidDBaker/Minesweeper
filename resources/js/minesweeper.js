const printBoard = board => {
    console.log(`Current Board: `);

};

let board = [
[' ', ' ', ' '], 
[' ', ' ', ' '], 
[' ', ' ', ' ']
];
printBoard(board);
board[0][1] = '1';
board[2][2] = 'B';
printBoard(board);
