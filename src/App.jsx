import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Warehouse from "./components/Warehouse";
import Inventory from "./components/Inventory";
import Footer from "./components/Footer";
import InventoryItemDetail from "./components/InventoryItemDetail";
import WarehouseDetail from "./components/WarehouseDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          
          <Route path="/" element={<Warehouse />} />
          <Route path="/warehouse/:warehouseId" element={<WarehouseDetail />} />
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
