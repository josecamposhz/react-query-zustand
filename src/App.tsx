import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Card } from "./components/Card";
import { useFetchRepositories } from "./hooks/useFetchRepositories";
import { useFavoriteRepositoriesStore } from "./store";

function App() {
  const [userInput, setUserInput] = useState<string>("josecamposhz");
  const [user, setUser] = useState<string>("josecamposhz");
  const { data, isLoading, isError } = useFetchRepositories(user);
  const favorites = useFavoriteRepositoriesStore((state) => state.favorites);

  if (isLoading) return <div>Loading...</div>;

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
      <h1>Vite + React</h1>
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
      {isError && <div>Usuario no encontrado</div>}
      <h2>Total repositories: {data?.length}</h2>
      <section className="repositories-section">
        {data?.map((repository) => (
          <Card
            key={repository.id}
            repository={repository}
            isFavorite={favorites.includes(repository.id)}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
