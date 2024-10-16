import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import ClassOverview from "./pages/ClassOverview";
import ClassDetail from "./components/ClassDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/class-overview" element={<ClassOverview />}></Route>
            <Route path="/:id" element={<ClassDetail />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
