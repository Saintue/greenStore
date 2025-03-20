import "./App.css";
import MainLayout from "./layouts/MainLayout.tsx";
import MainPage from "./pages/MainPage.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound.tsx";
import CalculatorPage from "./pages/CalculatorPage.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import SignInPage from "./pages/SignInPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import {useEffect} from "react";
import {useAuthStore} from "./stores/authStore.ts";
import ProtectedAuth from "./utils/ProtectedAuth.tsx";

function App() {
  const store = useAuthStore(state => state);
  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    } else {store.setLoading(false);}
  }, [])
  if (store.isLoading){
    return <div>Loading...</div>;
  }
  return (<div className="bg-cover size-full bg-no-repeat bg-center bg-[url(./assets/2.png)]">
    <Router>
      <Routes>
        <Route path="/shopCalculator" element={<MainLayout/>}>
          <Route path="/shopCalculator/" element={<MainPage/>}></Route>
          <Route path="products/:id" element={<ProductPage/>}></Route>

          <Route path="/shopCalculator/calculator" element={<CalculatorPage/>}></Route>
          <Route element={<ProtectedAuth/>}>
          <Route path="signup" element={<SignUpPage/>}></Route>
          <Route path="signin" element={<SignInPage/>}></Route>
          </Route>
          <Route path="*" element={<PageNotFound/>}></Route>
        </Route>
      </Routes>
    </Router>
  </div>
)
  ;
}

export default App;
