import React from "react";
import './styles/style.css';
import Header from "./components/Header.js";
import Sidebar from "./components/Sidebar.js";
import Main from "./components/Main.js";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <Sidebar />
        <Main />
      </main>
    </div>
  );
}

export default App;
