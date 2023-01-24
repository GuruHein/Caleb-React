import Header from "./components/Header";
import Employees from "./pages/Employees";
import Dictionary from "./pages/Dictionary";
// import Definition from './pages/Definition';
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"

function App() {
  
  return (
    <div className="App">
        <BrowserRouter >
          <Header>
            <Routes>
              <Route path="/" element={<Employees />} />
              <Route path="/dictionary" element={<Dictionary />} />
              <Route path="/dictionary/:searchedWord" element={<Dictionary />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Header>
        </BrowserRouter>
    </div>
  );
}

export default App;
