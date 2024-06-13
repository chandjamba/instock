import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./inventoryItemDetail.scss";

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
    <div className="inventory">
      <div className="inventory__item-details">
        <div className="inventory__heading-card">
          <h1 className="inventory__item-heading">
            {inventoryItemDetail?.item_name}
          </h1>
          <button className="inventory__item-edit">Edit</button>
        </div>
          <div className="inventory__detail-card">
        <div className="inventory__iteminfo-box1">
                    <p className="inventory__description-heading">DESCRIPTION</p>
                    <div className="inventory__item-description">
                      {inventoryItemDetail?.description}
                    </div>
                  </div>

                  <div className="inventory__box1-box2-container">
                  <div className="inventory__iteminfo-box2">
                    <p className="inventory__category-heading">CATEGORY</p>
                    <div className="inventory__item-category">
                      {inventoryItemDetail?.category}
                    </div>
                    <p className="inventory__status-heading">STATUS</p>
                    <div className="inventory__item-status">{inventoryItemDetail?.status}</div>
                  </div>

                  <div className="inventory__iteminfo-box3">
                    <p className="inventory__location-heading">WAREHOUSE</p>
                    <div className="inventory__item-warehouse-location">
                      {inventoryItemDetail?.warehouse_name}
                    </div>
                    <p className="inventory__quantity-heading">QUANTITY</p>
                    <div className="inventory__item-quantity">{inventoryItemDetail?.quantity}</div>
                  </div>
                  </div>
                  </div>
        
      </div>
    </div>
  );
}
