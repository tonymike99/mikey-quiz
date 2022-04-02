import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Categories, PageNotFound } from "./pages/index";
import { Header, Footer } from "./components/index";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
