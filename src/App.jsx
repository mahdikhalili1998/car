import { useEffect } from "react";
import Car from "./components/car";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Navigate to="/homepage" replace />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/detail-continue-to-buy" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
