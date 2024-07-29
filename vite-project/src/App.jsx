import Experiments from "./components/Experiments";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Simulation from "./components/Simulations/Simulation";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="simulation" element={<Simulation />} />
        <Route path="experiments" element={<Experiments />} />
      </Routes>
    </div>
  );
};

export default App;
