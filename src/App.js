import React from "react";
import Navbar from "./components/Navbar";
import Spinner from "./components/Spinner";
import News from "./components/News";

function App() {
  return (
    <div>
      <Navbar />
      <Spinner />
      <News />
    </div>
  );
}

export default App;
