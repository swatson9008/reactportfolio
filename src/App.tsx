// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Intro from "./components/intro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Intro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
