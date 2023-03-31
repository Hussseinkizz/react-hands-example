import { reactState } from 'react-hands';

export default function Counter() {
  const { useStore } = reactState();

  const [state, dispatch] = useStore();

  return (
    <div className="flex">
      <button
        className="button"
        onClick={() => dispatch({ type: 'increment' })}
      >
        minus -
      </button>
      <button
        className="button"
        onClick={() => dispatch({ type: 'decrement' })}
      >
        plus +
      </button>
    </div>
  );
}
