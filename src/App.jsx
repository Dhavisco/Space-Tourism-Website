import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Destination from "./components/Destination";
import Index from "./components/Index";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
<Header/>
        <Routes>

          <Route path="/" element={<Index />} />
          <Route path="/destination" element={<Destination />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
