import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CheckoutPage from "./pages/Checkoutpage";

function App() {
  return (
    <div className="bg-white">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
