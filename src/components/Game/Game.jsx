import Menu from "../Menu/Menu";

function Game({ rows, columns }) {
    const start = () => console.log("start");

    return (
        <div className="Game">
            <Menu onClick={start} />
        </div>
    )
}

export default Game;