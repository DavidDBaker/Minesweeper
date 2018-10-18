const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    const gameBoard = [];
    for(let rowIndex=0; rowIndex<numberOfRows; rowIndex++){
        const row = [];
        for (let columnIndex=0; columnIndex<numberOfColumns; columnIndex++){
            row.push(' ');
        }
        gameBoard.push(row);
    }
    return gameBoard;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
    const gameBoard = [];
    for(let rowIndex=0; rowIndex<numberOfRows; rowIndex++){
        const row = [];
        for (let columnIndex=0; columnIndex<numberOfColumns; columnIndex++){
           row.push(null); 
        }
        gameBoard.push(row);
    }

    let numberOfBombsPlaced = 0;
    while(numberOfBombsPlaced < numberOfBombs){
        let randomRowIndex = Math.floor(Math.random() * numberOfRows);
        let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);  
        if(randomRowIndex && randomColumnIndex !== 'B'){
            gameBoard[randomRowIndex][randomColumnIndex] = 'B';
            numberOfBombsPlaced++;
        }
    
    }
    return gameBoard;   
}

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
    const neighborOffsets = [
        [-1,-1],
        [0,-1],
        [1,-1],
        [-1,0],
        [0,0],
        [1,0],
        [-1,1],
        [0,1],
    ];

    const numberOfRows = bombBoard.length;
    const numberOfColumns = bombBoard[0].length;

    let numberOfBombs = 0;
    neighborOffsets.forEach(offset => {
        const neighborRowIndex = rowIndex + offset[0]
        const neighborColumnIndex = columnIndex + offset[1];

        if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >=0 && neighborColumnIndex < numberOfColumns) {
            if (bombBoard[neighborRowIndex][neighborColumnIndex] == 'B') {
                numberOfBombs++;
            }
        }
    });
    return numberOfBombs;
}

const flipTile = (playerBoard,bombBoard,rowIndex,columnIndex) => {
    if (playerBoard[rowIndex][columnIndex] !== ' '){
        return;
    } 
    
    if (bombBoard[rowIndex][columnIndex] === 'B'){
        bombBoard.push(playerBoard);
    } else {
        playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard,rowIndex,columnIndex);
    }
}

const printBoard = gameBoard => {
    console.log(gameBoard.map(row => row.join(' | ')).join('\n'));
}

const playerBoard = generatePlayerBoard(5,5);
const bombBoard = generateBombBoard(5,5,8);

console.log('Player Board:')
printBoard(playerBoard);
console.log('Bomb Board')
printBoard(bombBoard);
flipTile(playerBoard,bombBoard,0,0);
console.log('updated player board:');
printBoard(playerBoard);