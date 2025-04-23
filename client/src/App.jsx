import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
