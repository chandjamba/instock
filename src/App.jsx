import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Warehouse from "./components/Warehouse";
import Inventory from "./components/Inventory";
import Footer from "./components/Footer";
import InventoryItemDetail from "./components/InventoryItemDetail";
import WarehouseDetail from "./components/WarehouseDetail";
import EditWarehouse from "./components/EditWarehouse";
import AddWarehouse from "./components/AddWarehouse";
import EditInventory from "./components/EditInventoryItem";
import AddInventoryItem from "./components/AddInventoryItem";
import WarehouseDelete from "./components/WarehouseDelete";
import InventoryItemDelete from "./components/InventoryItemDelete";

// let a = "/warehouse/:warehouseId/edit";
// let b = a.split("/");
// console.log("array of route i defined", b);
// let index = b.findIndex((item) => item.startsWith(":"))
// console.log("index i should be looking for", index);
// let c = window.location.pathname
// let d = c.split("/");
// console.log("array of route browser have defined", d);
// console.log(d[2]);
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Warehouse />} />
          <Route path="/warehouse/addWarehouse" element={<AddWarehouse />} />
          <Route path="/warehouse/:warehouseId" element={<WarehouseDetail />} />
          <Route
            path="/warehouse/:warehouseId/edit"
            element={<EditWarehouse />}
          />
          <Route
            path="/warehouse/:warehouseId/delete"
            element={<WarehouseDelete />}
          />

          <Route path="/inventory/" caseSensitive element={<Inventory />} />
          <Route
            path="/inventory/addInventoryItem"
            element={<AddInventoryItem />}
          />
          <Route
            path="/inventory/:itemId"
            caseSensitive
            element={<InventoryItemDetail />}
          />
          <Route path="/inventory/:itemId/edit" element={<EditInventory />} />
          <Route
            path="/inventory/:itemId/delete"
            element={<InventoryItemDelete />}
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
