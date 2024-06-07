import { Link } from "react-router-dom";

export default function InventoryItemDetail() {
    return (
        <Link to={`/inventory/${inventory?.item_name}`}>
      <div className="inventories">
      <div className="inventory">
        <h1 className="inventory__main-heading">Inventory</h1>
        <input
          className="inventory__input"
          type="text"
          placeholder="Search..."
        ></input>
        <button className="inventory__add-btn"> + Add New Item</button>
        <div className="inventories__list">
          {/* {inventories?.map((inventory) => {
            return <div className="card1">{inventory?.inventory_name}</div>;
          })} */}
          <div className="inventory-card1">
            <div className="inventory__info">
              <div className="inventory__info-box1">
                <p className="inventory__heading">INVENTORY</p>
                <div className="inventory__item-name">
                  {inventories?.[0]?.item_name}
                </div>
                <p className="inventory__category-heading">CATEGORY</p>
                <div className="inventory__category">
                  {inventories?.[0]?.category}
                </div>
                <p className="inventory__itemnumber-heading">ITEM NUMBER</p>
                <div className="inventory__item-no">{inventories?.[0]?.id}</div>
              </div>
              <div className="inventory__info-box2">
                <p className="inventory__status-heading">STATUS</p>
                <div className="inventory__status">
                  {inventories?.[0]?.status}
                </div>
                <p className="inventory__quantity-heading">QTY</p>
                <div className="inventory__quantity">
                  {inventories?.[0]?.quantity}
                </div>
                <p className="inventory__heading">WAREHOUSE</p>
                <div className="inventory__location">
                  {inventories?.[0]?.warehouse_name}
                </div>
              </div>
            </div>
            <div className="inventory__card-btn">
              <button className="inventory-delete">Delete</button>
              <button className="inventory-edit">Edit</button>
            </div>
        </div>
    </div>
</div>
</div>
</Link>
    );
}