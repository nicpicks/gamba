import React from "react";

export default function Option({ renderBoard, boardOption }) {
    const options = [
        {
            value: 9,
            text: "3 X 3"
        },
        {
            value: 16,
            text: "4 X 4"
        }
    ]
    return (
        <div className="p-5 justify-between flex gap-2">
            {options.map(({ value, text }, index) => {
                const isCurrentOption = boardOption === value;
                return (
                    <button className="bg-blue-500 w-full py-5 rounded-md 
                    text-white disabled:bg-gray-500"
                        key={index}
                        onClick={() => { renderBoard(value) }}
                        disabled={isCurrentOption}
                    >
                        {text}
                    </button>
                )
            })}
        </div>
    )
}
