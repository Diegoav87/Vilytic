import React from "react";
import Comparer from "./components/Comparer/Comparer";
import { ChartProvider } from "./context/Charts";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <ChartProvider>
        <Comparer />
      </ChartProvider>
    </div>
  );
};

export default App;
