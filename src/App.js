import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute, RestrictedRoute } from "./auth/index";
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

        {/* <Route element={<RestrictedRoute />}> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* </Route> */}

        {/* <Route element={<PrivateRoute />}> */}
        <Route path="/:name" element={<Categories />} />
        <Route path="/:name/:name" element={<Quiz />} />
        <Route path="/:name/:name/result" element={<Result />} />
        {/* </Route> */}

        <Route path="/*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
