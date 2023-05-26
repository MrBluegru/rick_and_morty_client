import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/home/Home";
import Error from "./pages/Error/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
