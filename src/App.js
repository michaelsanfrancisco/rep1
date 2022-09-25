import logo from './logo.svg';
import './App.css';
import User from './User';






function App() {
  return (
    <div className="App">
    <User userName='First user' tweet='What a day'/>
    <User userName='Second user' tweet='What a day'/>
    <User userName='Third user' tweet='What a day'/>
    <User userName='4 user' tweet='What a day'/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {2 + 2}
        </a>
      </header>
    </div>
  );
}

export default App;
