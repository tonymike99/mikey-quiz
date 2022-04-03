import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Categories, Quiz, Result, PageNotFound } from "./pages/index";
import { Header, Footer } from "./components/index";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
