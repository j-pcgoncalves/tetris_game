import "./Tetris.css"

import Board from "../Board/Board";

import { useBoard } from "../../hooks/useBoard";

function Tetris({ rows, columns, setGameOver }) {
    return (
        <Board />
    )
}

export default Tetris;