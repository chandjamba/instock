import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./inventoryItemDetail.scss";
import { databases } from "../lib/appwrite";

export default function InventoryItemDetail() {
  const [inventoryItemDetail, setInventoryItemDetail] = useState();
  const { itemId } = useParams();

  useEffect(() => {
    async function fetchedInventoryItemData() {
      const resp = await databases.getDocument(
        import.meta.env.VITE_INSTOCK_DATABASE_ID,
        import.meta.env.VITE_INSTOCK_INVENTORIES_COLLECTION_ID,
        itemId
      )
      const data = resp
      setInventoryItemDetail(data);
      console.log(data);
    }
    fetchedInventoryItemData();
  }, [itemId]);
  return (
    <div className="inventoryDet">
      <div className="inventoryDet__item-details">
        <div className="inventoryDet__heading-card">
          <h1 className="inventoryDet__item-heading">
            {inventoryItemDetail?.itemName}
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
              {inventoryItemDetail?.itemDescription}
            </div>
          </div>

          <div className="inventoryDet__box1-box2-container">
            <div className="inventoryDet__iteminfo-box2">
              <p className="inventoryDet__category-heading">CATEGORY</p>
              <div className="inventoryDet__item-category">
                {inventoryItemDetail?.categories?.categoryName}
              </div>
              <p className="inventoryDet__status-heading">STATUS</p>
              <div className="inventoryDet__item-status">
                {inventoryItemDetail?.itemStatus}
              </div>
            </div>

            <div className="inventoryDet__iteminfo-box3">
              <p className="inventoryDet__location-heading">WAREHOUSE</p>
              <Link
                to={`/warehouse/${inventoryItemDetail?.warehouse_id}`}
                className="inventoryDet__item-warehouse-location"
              >
                {inventoryItemDetail?.warehouses?.warehouseName}
              </Link>
              <p className="inventoryDet__quantity-heading">QUANTITY</p>
              <div className="inventoryDet__item-quantity">
                {inventoryItemDetail?.itemQuantity}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
