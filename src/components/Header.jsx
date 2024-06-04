import { NavLink } from "react-router-dom";
import "./header.scss";
export default function Header() {
  return (
    <div className="header">
      <div className="header__heading">INSTOCK</div>
      <div className="header__menu">
        <NavLink to="/" className="header__menu-warehouses">Warehouses</NavLink>
        <NavLink to="/inventory" className="header__menu-inventory">Inventory</NavLink>
      </div>
    </div>
  );
}
