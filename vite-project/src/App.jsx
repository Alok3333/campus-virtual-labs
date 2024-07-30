import Experiments from "./components/Experiments";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Simulation from "./components/Simulations/Simulation";
import { SnackbarProvider } from "notistack";
import SimulationOne from "./components/Simulations/SimulationOne";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="simulation"
          element={
            <SnackbarProvider>
              <Simulation />
              <SimulationOne />
            </SnackbarProvider>
          }
        />
        <Route path="experiments" element={<Experiments />} />
      </Routes>
    </div>
  );
};

export default App;
