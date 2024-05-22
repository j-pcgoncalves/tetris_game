import "./GameController.css";

import { Action, actionForKey } from "../../utils/input";
import { playerController } from "../../utils/playerController";

import { useInterval } from "../../hooks/useInterval";
import { useDropTime } from "../../hooks/useDropTime";

function GameController({
    board,
    gameStats,
    player,
    setGameOver,
    setPlayer
}) {
    const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({
        gameStats
    });

    useInterval(() => {
        handleInput({ action: Action.SlowDrop });
    }, dropTime);

    const onKeyDown = ({ code }) => {
        const action = actionForKey(code);

        if (action === Action.Pause) {
            if (dropTime) {
                pauseDropTime();
            } else {
                resumeDropTime();
            }
        } else if (action === Action.Quit) {
            setGameOver(true);
        } else {
            handleInput({ action });
        }
    }

    const handleInput = ({ action }) => {
        playerController({
            action,
            board,
            player,
            setPlayer,
            setGameOver
        });
    }

    return (
        <input 
            className="GameController"
            type="text"
            onKeyDown={onKeyDown}
            autoFocus
        />
    );
}

export default GameController;