import { GameState } from './Game';

type Props = {
  history: GameState[];
  handleClick: (gameState: GameState, index: number) => void;
};

const History = ({ history, handleClick }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {history.map((gameState, index) => {
        return (
          <button
            key={index}
            onClick={handleClick.bind(null, gameState, index)}
            className="rounded-sm border border-blue-700 bg-green-400 px-2 hover:bg-green-300 active:bg-green-400"
          >
            Go to {index === 0 ? 'game start' : `move #${index}`}
          </button>
        );
      })}
    </div>
  );
};

export default History;
