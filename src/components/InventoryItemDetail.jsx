import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
    <div className="inventoryDet">
      <div className="inventoryDet__item-details">
        <div className="inventoryDet__heading-card">
          <h1 className="inventoryDet__item-heading">
            {inventoryItemDetail?.item_name}
          </h1>
          <Link
            to={`/inventory/${itemId}/edit`}
            className="inventoryDet__item-edit"
          >
            Edit
          </Link>
        </div>
        <div className="inventoryDet__detail-card">
          <div className="inventoryDet__iteminfo-box1">
            <p className="inventoryDet__description-heading">DESCRIPTION</p>
            <div className="inventoryDet__item-description">
              {inventoryItemDetail?.description}
            </div>
          </div>

          <div className="inventoryDet__box1-box2-container">
            <div className="inventoryDet__iteminfo-box2">
              <p className="inventoryDet__category-heading">CATEGORY</p>
              <div className="inventoryDet__item-category">
                {inventoryItemDetail?.category}
              </div>
              <p className="inventoryDet__status-heading">STATUS</p>
              <div className="inventoryDet__item-status">
                {inventoryItemDetail?.status}
              </div>
            </div>

            <div className="inventoryDet__iteminfo-box3">
              <p className="inventoryDet__location-heading">WAREHOUSE</p>
              <Link
                to={`/warehouse/${inventoryItemDetail?.warehouse_id}`}
                className="inventoryDet__item-warehouse-location"
              >
                {inventoryItemDetail?.warehouse_name}
              </Link>
              <p className="inventoryDet__quantity-heading">QUANTITY</p>
              <div className="inventoryDet__item-quantity">
                {inventoryItemDetail?.quantity}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
