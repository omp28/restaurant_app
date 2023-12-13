import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./input.css";
import "./index.css";
import Cart from "./components/cart/cart";
import Number from "./components/number/number";
// able to add font using css but not with the tailwind here
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/number" element={<Number />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
