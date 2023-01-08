import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { FavoriteRepositories } from "./components/FavoriteRepositories";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState<string>("josecamposhz");
  const [user, setUser] = useState<string>(userInput);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>FavoriteRepos</h1>
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1em",
          margin: "1rem 0",
        }}
      >
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={() => setUser(userInput)}>Buscar</button>
      </header>
      <FavoriteRepositories user={user} />
    </div>
  );
}

export default App;
