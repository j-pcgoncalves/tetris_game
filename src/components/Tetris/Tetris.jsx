import "./Tetris.css"

import Board from "../Board/Board";

import { useBoard } from "../../hooks/useBoard";

function Tetris({ rows, columns, setGameOver }) {
    const [board] = useBoard({ rows, columns })

    return (
        <Board board={board} />
    )
}

export default Tetris;