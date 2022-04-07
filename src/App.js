import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Login,
  Signup,
  Home,
  Categories,
  Quiz,
  Result,
  PageNotFound,
} from "./pages/index";
import { Header, Footer } from "./components/index";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/categories/:name" element={<Categories />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
