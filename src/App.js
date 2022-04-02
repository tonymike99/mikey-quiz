import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/index";
import { Header, Footer } from "./components/index";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
