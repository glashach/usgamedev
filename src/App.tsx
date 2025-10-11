import { BrowserRouter } from "react-router";
import { Header } from "./components/Header/Header";
import { Router } from "./components/Router/Router";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Router />
      </main>
    </BrowserRouter>
  );
}

export default App;
