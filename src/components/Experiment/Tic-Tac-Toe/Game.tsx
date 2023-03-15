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
  const [prevGameState, setPrevGameState] = useState(initialGameState);
  // const [isXNext, setIsXNext] = useState(true);
  const [history, setHistory] = useState<GameState[]>([initialGameState]);
  const [historyPosition, setHistoryPosition] = useState(0);
  const isPlayingRef = useRef(true);

  const handleHistoryClick = (gameState: GameState, index: number) => {
    setHistoryPosition(index);
    setGameState(gameState);
  };

  const handleSquareClick = (clickedIndex: number) => {
    // If game is finished or square is not empty do nothing
    if (!isPlayingRef.current || gameState[clickedIndex]) return;

    // Make move and update game state
    const isXNext = historyPosition % 2 === 0;
    const updatedGameState = gameState.map((sq, index) =>
      index === clickedIndex ? (isXNext ? 'X' : 'O') : sq
    );

    // Update game state
    setGameState(updatedGameState);

    // Update history
    addToHistory(updatedGameState);

    // Define who plays next 'X' or 'O'
    // setIsXNext((curState) => !curState);
  };

  const checkGameStatus = () => {
    // Compare current positions on board
    // with win combinations
    winCombinations.forEach((combination) => {
      if (
        gameState[combination[0]] &&
        gameState[combination[0]] === gameState[combination[1]] &&
        gameState[combination[0]] === gameState[combination[2]]
      ) {
        alert(`${gameState[combination[0]]} win!!!`);
        isPlayingRef.current = false;
      }
    });
  };

  const addToHistory = (gameStateToAdd: GameState) => {
    // If you are in the last move just
    // update your history and position
    if (historyPosition === history.length - 1) {
      setHistoryPosition(history.length);
      setHistory([...history, gameStateToAdd]);
    }
    // If you are not in the last move
    // remove last moves
    if (historyPosition < history.length - 1) {
      setHistory(
        history.slice(0, historyPosition + 1).concat([gameStateToAdd])
      );
      setHistoryPosition(historyPosition + 1);
    }
  };

  // If game not finished and gameState has changed
  // check game status
  if (isPlayingRef.current && gameState !== prevGameState) {
    checkGameStatus();
    setPrevGameState(gameState);
  }

  return (
    <div className="mx-auto w-max rounded-md bg-slate-50 p-10 text-gray-800">
      <h1 className="mb-10 text-lg font-semibold">Tic Tac Toe Game</h1>
      <div className="flex gap-10">
        <Board gameState={gameState} handleSquareClick={handleSquareClick} />
        <History history={history} handleClick={handleHistoryClick} />
      </div>
    </div>
  );
};

export default Game;
