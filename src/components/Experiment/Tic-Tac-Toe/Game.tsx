import { useRef, useState } from 'react';
import Board from './Board';
import History from './History';

export type GameState = string[];

const initialGameState: GameState = new Array(9).fill('');

const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Game = () => {
  const [gameState, setGameState] = useState(initialGameState);
  const [history, setHistory] = useState<GameState[]>([initialGameState]);
  const [winner, setWinner] = useState('');

  const getMovesCount = () => {
    return gameState.filter((gs) => gs).length;
  };

  const handleHistoryClick = (gameState: GameState) => {
    setGameState(gameState);
  };

  const handleSquareClick = (clickedIndex: number) => {
    // If game is finished or square is not empty do nothing
    if (winner || gameState[clickedIndex]) return;

    // Make move and update game state
    const updatedGameState = gameState.map((sq, index) =>
      index === clickedIndex ? (getMovesCount() % 2 === 0 ? 'X' : 'O') : sq
    );

    // Update game state
    setGameState(updatedGameState);

    // Update history
    addToHistory(updatedGameState);

    // Check if we have a winner
    checkGameStatus(updatedGameState);
  };

  const checkGameStatus = (stateToCheck: GameState) => {
    // Compare current positions on board
    // with win combinations
    for (const combination of winCombinations) {
      if (
        stateToCheck[combination[0]] &&
        stateToCheck[combination[0]] === stateToCheck[combination[1]] &&
        stateToCheck[combination[0]] === stateToCheck[combination[2]]
      ) {
        setWinner(stateToCheck[combination[0]]);
        break;
      }
    }
  };

  const addToHistory = (gameStateToAdd: GameState) => {
    // If you are in the last move just
    // update your history
    if (getMovesCount() === history.length - 1) {
      setHistory([...history, gameStateToAdd]);
    }
    // If you are not in the last move
    // remove last moves
    if (getMovesCount() < history.length - 1) {
      setHistory(
        history.slice(0, getMovesCount() + 1).concat([gameStateToAdd])
      );
    }
  };

  const status = winner
    ? `🎉 Winner: ${winner}`
    : `Next player: ${getMovesCount() % 2 === 0 ? 'X' : 'O'}`;

  return (
    <div className="mx-auto w-max rounded-md bg-slate-50 p-10 text-gray-800">
      <h1 className="mb-4 text-lg font-semibold">Tic Tac Toe Game</h1>
      <p className={`mb-4 ${winner && 'font-semibold text-fuchsia-500'}`}>
        {status}
      </p>
      <div className="flex gap-10">
        <Board gameState={gameState} handleSquareClick={handleSquareClick} />
        <History
          history={history}
          position={getMovesCount()}
          handleClick={handleHistoryClick}
        />
      </div>
    </div>
  );
};

export default Game;
