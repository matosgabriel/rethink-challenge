import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Registration } from "./pages/Registration";
import { ShowUsers } from "./pages/ShowUsers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowUsers />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
