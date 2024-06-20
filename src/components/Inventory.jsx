import { useEffect, useState } from "react";
import "./inventory.scss";
import { Link } from "react-router-dom";

export default function Inventory() {
  const [inventories, setInventories] = useState();
  const url = "https://instock-api-cj.onrender.com/api/inventories";

  useEffect(() => {
    async function fetchedInventoriesData() {
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setInventories(data);
    }
    fetchedInventoriesData();
  }, []);

  return (
    <div className="inventories">
      <div className="inventory">
        <div className="inventory__main-heading-and-input-section">
          <h1 className="inventory__main-heading">Inventory</h1>
          <input
            className="inventory__input"
            type="text"
            placeholder="Search..."
          ></input>
          <Link 
          to={"/inventory/addInventoryItem"}
          className="inventory__add-btn"> + Add New Item</Link>
        </div>
        <div className="inventories__list">
          {inventories?.map((inventory) => {
            return (
              <div className="inventory-card1" key={inventories.id}>
                <div className="inventory__info">
                  <div className="inventory__info-box1">
                    <p className="inventory__heading">INVENTORY</p>
                    <Link
                      to={`/inventory/${inventory?.id}`}
                      className="inventory__item-name"
                    >
                      {inventory?.item_name}
                    </Link>
                    <p className="inventory__category-heading">CATEGORY</p>
                    <div className="inventory__category">
                      {inventory?.category}
                    </div>
                    <p className="inventory__itemnumber-heading">ITEM NUMBER</p>
                    <div className="inventory__item-no">{inventory?.id}</div>
                  </div>
                  <div className="inventory__info-box2">
                    <p className="inventory__status-heading">STATUS</p>
                    <div className="inventory__status">{inventory?.status}</div>
                    <p className="inventory__quantity-heading">QTY</p>
                    <div className="inventory__quantity">
                      {inventory?.quantity}
                    </div>
                    <p className="inventory__heading">WAREHOUSE</p>
                    <Link 
                    to={`/warehouse/${inventory?.warehouse_name}`}
                    className="inventory__location">
                      {inventory?.warehouse_name}
                    </Link>
                  </div>
                </div>
                <div className="inventory__card-btn">
                  <Link 
                  to={`/inventory/${inventory?.id}/delete`}
                  className="inventory-delete">Delete</Link>
                  <Link 
                  to={`/inventory/${inventory?.id}/edit`}
                  className="inventory-edit">Edit</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
