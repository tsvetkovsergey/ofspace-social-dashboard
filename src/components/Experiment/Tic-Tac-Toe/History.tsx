import { GameState } from './Game';

type Props = {
  history: GameState[];
  position: number;
  handleClick: (gameState: GameState) => void;
};

const History = ({ history, position, handleClick }: Props) => {
  return (
    <ol className="flex list-decimal flex-col gap-2">
      {history.map((gameState, index) => {
        return (
          <li key={index}>
            <button
              onClick={handleClick.bind(null, gameState)}
              className={`rounded-sm border border-gray-600 ${
                index < position + 1 ? 'bg-green-400' : 'bg-green-100'
              } px-2 hover:bg-green-300 active:bg-green-400`}
            >
              Go to {index === 0 ? 'game start' : `move #${index}`}
            </button>
          </li>
        );
      })}
    </ol>
  );
};

export default History;
