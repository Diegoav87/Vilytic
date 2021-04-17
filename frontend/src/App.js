import React from "react";
import Comparer from "./components/Comparer/Comparer";
import { ChartProvider } from "./context/Charts";

const App = () => {
  return (
    <div>
      <ChartProvider>
        <Comparer />
      </ChartProvider>
    </div>
  );
};

export default App;
