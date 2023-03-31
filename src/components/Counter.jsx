import { reactState } from 'react-hands';

export default function Counter() {
  const { useStore } = reactState();

  const [state, dispatch] = useStore();

  return (
    <div className="flex buttons">
      <button
        className="button"
        onClick={() => dispatch({ type: 'decrement' })}
      >
        minus -
      </button>
      <button
        className="button"
        onClick={() => dispatch({ type: 'increment' })}
      >
        plus +
      </button>
    </div>
  );
}
