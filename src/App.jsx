import { useEffect } from "react";
import Car from "./components/car";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Navigate to="/homepage" replace />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
