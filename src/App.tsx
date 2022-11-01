import Todos from "./components/Todos/Todos";

function App() {
  return (
    <div className="App" data-testid="app">
      <h1 className="title">todos</h1>
      <Todos/>
    </div>
  );
}

export default App;
