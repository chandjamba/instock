import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Warehouses from "./components/Warehouses";
import Inventory from "./components/Inventory";
import Footer from "./components/Footer";
import InventoryItemDetail from "./components/InventoryItemDetail";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Warehouses />} />
          <Route path="/inventory/" caseSensitive element={<Inventory />} />
          <Route
            path="/inventory/:itemId"
            caseSensitive
            element={<InventoryItemDetail />}
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
