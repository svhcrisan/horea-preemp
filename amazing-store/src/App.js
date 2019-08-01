import React from "react";
import "./App.css";
import Header from "./Components/Top/Header/Header";
import MainContent from "./Components/Middle/MainContent/MainContent";
import Footer from "./Components/Bottom/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
