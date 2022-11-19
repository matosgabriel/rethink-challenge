import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Registration } from "./pages/Registration";
import { ShowUsers } from "./pages/ShowUsers";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowUsers />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>

      <ToastContainer />
    </Router>
  );
}

export default App;
