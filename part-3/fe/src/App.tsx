import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Dashboard } from "./Dashboard";
import { Categories } from "./components/Categories";
import { Subcategories } from "./components/Subcategories";
import { Suppliers } from "./components/Suppliers";
import { Uoms } from "./components/Uoms";
import { Warehouses } from "./components/Warehouses";
import { Products } from "./components/Products";
import { SupplierProducts } from "./components/SupplierProducts";
import { Transactions } from "./components/Transactions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/subcategories" element={<Subcategories />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/uoms" element={<Uoms />} />
        <Route path="/warehouses" element={<Warehouses />} />
        <Route path="/products" element={<Products />} />
        <Route path="/supplier-products" element={<SupplierProducts />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
