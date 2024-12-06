import "./App.css";
import MainLayout from "./layouts/MainLayout.tsx";
import MainPage from "./pages/MainPage.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound.tsx";

function App() {
  return (
      <div className="w-full h-full bg-amber-200">
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<MainPage />}></Route>
            <Route path="*" element={<PageNotFound/>}></Route>
        </Route>
      </Routes>
    </Router>
      </div>
  );
}

export default App;
