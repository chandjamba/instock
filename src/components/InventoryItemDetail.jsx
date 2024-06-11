import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function InventoryItemDetail() {
  const [inventoryItemDetail, setInventoryItemDetail] = useState();
  const { itemId } = useParams();

  useEffect(() => {
    async function fetchedInventoryItemData() {
      const url = `https://instock-api-cj.onrender.com/api/inventories/${itemId}`;
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setInventoryItemDetail(data);
    }
    fetchedInventoryItemData();
  }, [itemId]);
  return (
    <div className="inventoryItemDetail">
      <div className="inventory">
        <h1 className="inventory__main-heading">
          {inventoryItemDetail?.item_name}
        </h1>
        <button className="inventory-edit">Edit</button>

        <div className="inventoryItemDetail">
          <div className="inventory__item" key={inventoryItemDetail?.id}>
            <div className="inventory__info">
              <div className="inventory__info-box1">
                <p className="inventory__category-heading">CATEGORY</p>
                <div className="inventory__category">
                  {inventoryItemDetail?.category}
                </div>
                <p className="inventory__quantity-heading">QTY</p>
                <div className="inventory__quantity">
                  {inventoryItemDetail?.quantity}
                </div>
              </div>
              <div className="inventory__info-box2">
                <p className="inventory__status-heading">STATUS</p>
                <div className="inventory__status">
                  {inventoryItemDetail?.status}
                </div>
                <p className="inventory__heading">WAREHOUSE</p>
                <div className="inventory__location">
                  {inventoryItemDetail?.warehouse_name}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
