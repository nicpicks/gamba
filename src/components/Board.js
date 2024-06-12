import React, { useState } from "react";
import { GiBeerStein } from "react-icons/gi";
import generateBoard from "../utils/generateBoard";
import Option from "./Option";

const updateBoardLayout = (value) => {
    return value === 9 ? "grid-cols-3" : "grid-cols-4" || "grid-cols-4";
}

export default function Board({ setIsJackpot }) {
    const boardOption = parseInt(window.localStorage.getItem("boardOption")) || 16;
    const [board, setBoard] = useState(generateBoard(boardOption));
    const [boardLayout, setBoardLayout] = useState(updateBoardLayout(boardOption ? boardOption : 16));

    const handleClick = (index) => {
        if (board[index] === 0) {
            const updatedBoard = [...board];
            updatedBoard[index] = -1;
            setBoard(updatedBoard);
        } else {
            setIsJackpot(true);
        }
    }

    const renderBoard = (value) => {
        setBoard(generateBoard(value));
        setBoardLayout(updateBoardLayout(value));
        window.localStorage.setItem("boardOption", value);
    }


    return (
        <div>
            <Option renderBoard={renderBoard} boardOption={boardOption} />
            <div className={`grid gap-2 p-5 ${boardLayout}`}>
                {board.map((value, index) => {
                    return (
                        <div className="w-full h-28 grid place-content-center"
                            key={index}
                            onClick={() => handleClick(index)}
                        >
                            {value >= 0 && <GiBeerStein className="text-5xl text-yellow-500" />}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
