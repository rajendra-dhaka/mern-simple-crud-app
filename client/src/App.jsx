import { Route, Routes } from "react-router-dom";
import { Home, AddUser } from "./pages";

function App() {
  return (
    <div className="p-4 min-h-screen bg-[#8ec5fc] bg-gradient-to-tr from-[#8ec5fc] to-[#e0c3fc] overflow-scroll">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upsert" element={<AddUser />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
