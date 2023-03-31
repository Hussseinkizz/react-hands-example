import Handz from './assets/handz.png';
import './App.css';
import { reactState } from 'react-hands';
import Counter from './components/Counter';

function App() {
  const { useStore } = reactState();

  const [state, dispatch] = useStore();
  // console.log(state);

  return (
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
      <p className="read-the-docs info">Click on top logo to learn more</p>
      <br />
      <br />
      <div>
        <img src={Handz} className="hands-art art" alt="hands image" />
      </div>
    </div>
  );
}

export default App;
