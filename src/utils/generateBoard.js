const generateBoard = (value = 16) => {
    const board = [];
    const jackpotIndex = Math.floor(Math.random() * value);

    for (let i = 0; i < value; i++) {
        if (jackpotIndex === i) {
            board.push(1);
        } else {
            board.push(0);
        }
    }
    return board;
};

export default generateBoard;