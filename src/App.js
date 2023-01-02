
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import data from "./components/data";
import Navbar from "./components/Nav";

function App() {
  const [members, setMembers] = useState(data)
  return (
    <div className="App">
      <Navbar members={members} />
      <h1>We are the MOST {members.length} MnKs in the WORLD</h1>
      <Dashboard members={members} />
    </div>
  );
}

export default App;
