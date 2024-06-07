import { useEffect, useState } from "react";
import "./inventory.scss";

const url = "https://instock-api-cj.onrender.com/api/inventories";

export default function Inventory() {
  const [inventories, setInventories] = useState();

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
          <div className="inventory-card2">
            <div className="inventory__info">
              <div className="inventory__info-box1">
                <p className="inventory__heading">INVENTORY</p>
                <div className="inventory__item-name">
                  {inventories?.[1]?.item_name}
                </div>
                <p className="inventory__category-heading">CATEGORY</p>
                <div className="inventory__category">
                  {inventories?.[1]?.category}
                </div>
                <p className="inventory__itemnumber-heading">ITEM NUMBER</p>
                <div className="inventory__item-no">{inventories?.[1]?.id}</div>
              </div>
              <div className="inventory__info-box2">
                <p className="inventory__status-heading">STATUS</p>
                <div className="inventory__status">
                  {inventories?.[1]?.status}
                </div>
                <p className="inventory__quantity-heading">QTY</p>
                <div className="inventory__quantity">
                  {inventories?.[1]?.quantity}
                </div>
                <p className="inventory__heading">WAREHOUSE</p>
                <div className="inventory__location">
                  {inventories?.[1]?.warehouse_name}
                </div>
              </div>
            </div>
            <div className="inventory__card-btn">
              <button className="inventory-delete">Delete</button>
              <button className="inventory-edit">Edit</button>
            </div>
          </div>
          <div className="inventory-card3">
            <div className="inventory__info">
              <div className="inventory__info-box1">
                <p className="inventory__heading">INVENTORY</p>
                <div className="inventory__item-name">
                  {inventories?.[2]?.item_name}
                </div>
                <p className="inventory__category-heading">CATEGORY</p>
                <div className="inventory__category">
                  {inventories?.[2]?.category}
                </div>
                <p className="inventory__itemnumber-heading">ITEM NUMBER</p>
                <div className="inventory__item-no">{inventories?.[2]?.id}</div>
              </div>
              <div className="inventory__info-box2">
                <p className="inventory__status-heading">STATUS</p>
                <div className="inventory__status">
                  {inventories?.[2]?.status}
                </div>
                <p className="inventory__quantity-heading">QTY</p>
                <div className="inventory__quantity">
                  {inventories?.[2]?.quantity}
                </div>
                <p className="inventory__heading">WAREHOUSE</p>
                <div className="inventory__location">
                  {inventories?.[2]?.warehouse_name}
                </div>
              </div>
            </div>
            <div className="inventory__card-btn">
              <button className="inventory-delete">Delete</button>
              <button className="inventory-edit">Edit</button>
            </div>
          </div>
          <div className="inventory-card4">
            <div className="inventory__info">
              <div className="inventory__info-box1">
                <p className="inventory__heading">INVENTORY</p>
                <div className="inventory__item-name">
                  {inventories?.[3]?.item_name}
                </div>
                <p className="inventory__category-heading">CATEGORY</p>
                <div className="inventory__category">
                  {inventories?.[3]?.category}
                </div>
                <p className="inventory__itemnumber-heading">ITEM NUMBER</p>
                <div className="inventory__item-no">{inventories?.[3]?.id}</div>
              </div>
              <div className="inventory__info-box2">
                <p className="inventory__status-heading">STATUS</p>
                <div className="inventory__status">
                  {inventories?.[3]?.status}
                </div>
                <p className="inventory__quantity-heading">QTY</p>
                <div className="inventory__quantity">
                  {inventories?.[3]?.quantity}
                </div>
                <p className="inventory__heading">WAREHOUSE</p>
                <div className="inventory__location">
                  {inventories?.[3]?.warehouse_name}
                </div>
              </div>
            </div>
            <div className="inventory__card-btn">
              <button className="inventory-delete">Delete</button>
              <button className="inventory-edit">Edit</button>
            </div>
          </div>
          <div className="inventory-card5">
            <div className="inventory__info">
              <div className="inventory__info-box1">
                <p className="inventory__heading">INVENTORY</p>
                <div className="inventory__item-name">
                  {inventories?.[4]?.item_name}
                </div>
                <p className="inventory__category-heading">CATEGORY</p>
                <div className="inventory__category">
                  {inventories?.[4]?.category}
                </div>
                <p className="inventory__itemnumber-heading">ITEM NUMBER</p>
                <div className="inventory__item-no">{inventories?.[4]?.id}</div>
              </div>
              <div className="inventory__info-box2">
                <p className="inventory__status-heading">STATUS</p>
                <div className="inventory__status">
                  {inventories?.[4]?.status}
                </div>
                <p className="inventory__quantity-heading">QTY</p>
                <div className="inventory__quantity">
                  {inventories?.[4]?.quantity}
                </div>
                <p className="inventory__heading">WAREHOUSE</p>
                <div className="inventory__location">
                  {inventories?.[4]?.warehouse_name}
                </div>
              </div>
            </div>
            <div className="inventory__card-btn">
              <button className="inventory-delete">Delete</button>
              <button className="inventory-edit">Edit</button>
            </div>
          </div>
          <div className="inventory-card6">
            <div className="inventory__info">
              <div className="inventory__info-box1">
                <p className="inventory__heading">INVENTORY</p>
                <div className="inventory__item-name">
                  {inventories?.[5]?.item_name}
                </div>
                <p className="inventory__category-heading">CATEGORY</p>
                <div className="inventory__category">
                  {inventories?.[5]?.category}
                </div>
                <p className="inventory__itemnumber-heading">ITEM NUMBER</p>
                <div className="inventory__item-no">{inventories?.[5]?.id}</div>
              </div>
              <div className="inventory__info-box2">
                <p className="inventory__status-heading">STATUS</p>
                <div className="inventory__status">
                  {inventories?.[5]?.status}
                </div>
                <p className="inventory__quantity-heading">QTY</p>
                <div className="inventory__quantity">
                  {inventories?.[5]?.quantity}
                </div>
                <p className="inventory__heading">WAREHOUSE</p>
                <div className="inventory__location">
                  {inventories?.[5]?.warehouse_name}
                </div>
              </div>
            </div>
            <div className="inventory__card-btn">
              <button className="inventory-delete">Delete</button>
              <button className="inventory-edit">Edit</button>
            </div>
          </div>
          <div className="inventory-card7">
            <div className="inventory__info">
              <div className="inventory__info-box1">
                <p className="inventory__heading">INVENTORY</p>
                <div className="inventory__item-name">
                  {inventories?.[6]?.item_name}
                </div>
                <p className="inventory__category-heading">CATEGORY</p>
                <div className="inventory__category">
                  {inventories?.[6]?.category}
                </div>
                <p className="inventory__itemnumber-heading">ITEM NUMBER</p>
                <div className="inventory__item-no">{inventories?.[6]?.id}</div>
              </div>
              <div className="inventory__info-box2">
                <p className="inventory__status-heading">STATUS</p>
                <div className="inventory__status">
                  {inventories?.[6]?.status}
                </div>
                <p className="inventory__quantity-heading">QTY</p>
                <div className="inventory__quantity">
                  {inventories?.[6]?.quantity}
                </div>
                <p className="inventory__heading">WAREHOUSE</p>
                <div className="inventory__location">
                  {inventories?.[6]?.warehouse_name}
                </div>
              </div>
            </div>
            <div className="inventory__card-btn">
              <button className="inventory-delete">Delete</button>
              <button className="inventory-edit">Edit</button>
            </div>
          </div>
          <div className="inventory-card8">
            <div className="inventory__info">
              <div className="inventory__info-box1">
                <p className="inventory__heading">INVENTORY</p>
                <div className="inventory__item-name">
                  {inventories?.[7]?.item_name}
                </div>
                <p className="inventory__category-heading">CATEGORY</p>
                <div className="inventory__category">
                  {inventories?.[7]?.category}
                </div>
                <p className="inventory__itemnumber-heading">ITEM NUMBER</p>
                <div className="inventory__item-no">{inventories?.[7]?.id}</div>
              </div>
              <div className="inventory__info-box2">
                <p className="inventory__status-heading">STATUS</p>
                <div className="inventory__status">
                  {inventories?.[7]?.status}
                </div>
                <p className="inventory__quantity-heading">QTY</p>
                <div className="inventory__quantity">
                  {inventories?.[7]?.quantity}
                </div>
                <p className="inventory__heading">WAREHOUSE</p>
                <div className="inventory__location">
                  {inventories?.[7]?.warehouse_name}
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
  );
}
