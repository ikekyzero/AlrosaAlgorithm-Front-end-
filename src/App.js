import "././visual/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./modules/MyNavbar";
import MySlider from "./modules/MySlider";
import HomePage from "./pages/HomePage";
import LoadPage from "./pages/LoadPage";
import StatisticsPage from "./pages/StatisticsPage";
import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <MyNavbar />
      <MySlider />
      <div className="w-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/load" element={<LoadPage />} />
          <Route path="/result" element={<StatisticsPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
