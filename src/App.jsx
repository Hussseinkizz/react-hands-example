import Handz from './assets/handz.png';
import './App.css';
import { reactState } from 'react-hands';
import Counter from './components/Counter';

function App() {
  const initialState = { count: 0 };

  const actions = {
    increment: (state, action) => ({ count: state.count + 1 }),
    decrement: (state, action) => ({ count: state.count - 1 }),
  };

  const { StoreProvider, useStore } = reactState(initialState, actions);

  const [state, dispatch] = useStore();

  return (
    <StoreProvider>
      <div className="App">
        <a
          href="https://www.npmjs.com/package/react-hands"
          target="_blank"
          className="link"
        >
          <h1 className="hands-logo">🧤</h1>
          <h1>React Hands</h1>
        </a>
        <p>Play around, nothing will get out of hand!</p>
        <div className="card">
          <span className="bold">Count is {state.count}</span>
          <Counter />
        </div>
        <p className="read-the-docs info">
          Click on the logo top to to learn more
        </p>
        <br />
        <br />
        <div>
          <a href="https://www.npmjs.com/package/react-hands" target="_blank">
            <img src={Handz} className="hands-art art" alt="hands image" />
          </a>
        </div>
      </div>
    </StoreProvider>
  );
}

export default App;
