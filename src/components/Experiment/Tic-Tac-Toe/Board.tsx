import { GameState } from './Game';
import Square from './Square';

type Props = {
  gameState: GameState;
  handleSquareClick: (index: number) => void;
};

const Board = ({ gameState, handleSquareClick }: Props) => {
  return (
    <div className="grid h-min w-min grid-cols-[repeat(3,4rem)] grid-rows-[repeat(3,4rem)] border border-gray-800">
      {gameState.map((squareState, index) => {
        return (
          <Square
            key={index}
            index={index}
            state={squareState}
            handleClick={handleSquareClick}
          />
        );
      })}
    </div>
  );
};

export default Board;
