import "./Tetris.css"

import Board from "../Board/Board";
import GameStats from "../GameStats/GameStats";
import Previews from "../Previews/Previews";

import { useBoard } from "../../hooks/useBoard";
import { useGameStats } from "../../hooks/useGameStats";

function Tetris({ rows, columns, setGameOver }) {
    const [gameStats, addLinesCleared] = useGameStats();
    const [board] = useBoard({ rows, columns });

    const player = { tetrominoes: [] };

    return (
        <div className="Tetris">
            <Board board={board} />
            <GameStats gameStats={gameStats} />
            <Previews tetrominoes={player.tetrominoes} />
        </div>
    )
}

export default Tetris;