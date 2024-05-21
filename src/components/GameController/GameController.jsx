import "./GameController.css";

import { Action, actionForKey } from "../../utils/input";

function GameController({
    board,
    gameStats,
    player,
    setGameOver,
    setPlayer
}) {
    const onKeyUp = ({ code }) => {
        const action = actionForKey(code);

        if (action === Action.Quit) {
            setGameOver(true);
        }
    }

    const onKeyDown = ({ code }) => {}

    return (
        <input 
            className="GameController"
            type="text"
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            autoFocus
        />
    );
}

export default GameController;