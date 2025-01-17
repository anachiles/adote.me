import { Routes, Route } from "react-router-dom";
import { Feed } from "./pages/Feed";
import { Pet } from "./pages/Pet";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/pet/:id" element={<Pet />} />
      </Routes>
    </>
  );
}
export default App;
