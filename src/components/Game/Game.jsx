import Menu from "../Menu/Menu";

import { useGameOver } from "../../hooks/useGameOver";


function Game({ rows, columns }) {
    const [gameOver, setGameOver, resetGameOver] = useGameOver();

    const start = () => {
        resetGameOver();
        
        console.log(`Start gameOver is ${gameOver}`)
    };

    return (
        <div className="Game">
            <Menu onClick={start} />
        </div>
    )
}

export default Game;