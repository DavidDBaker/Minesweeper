const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    const gameBoard = [];
    for(let rowIndex=0; rowIndex<numberOfRows; rowIndex++){
        const row = [];
        gameBoard.push(row);
        for (let columnIndex=0; columnIndex<numberOfColumns; columnIndex++){
           row.push(' '); 
        }
    }
    return gameBoard;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
    const gameBoard = [];
    for(let rowIndex=0; rowIndex<numberOfRows; rowIndex++){
        const row = [];
        gameBoard.push(row);
        for (let columnIndex=0; columnIndex<numberOfColumns; columnIndex++){
           row.push(null); 
        }
    }
    let numberOfBombsPlaced = 0;

    while(numberOfBombsPlaced < numberOfBombs){
        let randomRowIndex = Math.floor(Math.random() * numberOfRows);
        let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);     
        gameBoard[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;
    }
    return gameBoard;
};

const printBoard = gameBoard => {
    gameBoard.map(row => row.join(' | ')).join('\n');
}

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);
printBoard(playerBoard);
printBoard(bombBoard);
