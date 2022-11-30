import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 gap-4 m-5">
      <Link className="underline" to="/categories">
        Categories
      </Link>
      <Link className="underline" to="/subcategories">
        Subcategories
      </Link>
      <Link className="underline" to="/suppliers">
        Suppliers
      </Link>
      <Link className="underline" to="/uoms">
        Uoms
      </Link>
      <Link className="underline" to="/warehouses">
        Warehouses
      </Link>
      <Link className="underline" to="/products">
        Products
      </Link>
      <Link className="underline" to="/supplier-products">
        Supplier Products
      </Link>
      <Link className="underline" to="/transactions">
        Transactions
      </Link>
    </div>
  );
};
