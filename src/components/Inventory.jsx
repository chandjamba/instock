import "./inventory.scss";
export default function Inventory() {
  return (
    <div className="inventories">
      <div className="inventory">
        <h1 className="inventory__main-heading">Inventory</h1>
        <input
          className="inventory__input"
          type="text"
          placeholder="Search..."
        ></input>
        <button className="inventory__add-btn"> + Add New Item</button>
      </div>
    </div>
  );
}