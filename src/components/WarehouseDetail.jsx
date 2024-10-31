import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./warehouseDetail.scss";
import { databases } from "../lib/appwrite";

export default function WarehouseDetail() {
  const [warehouseDetail, setWarehouseDetail] = useState();
  const [sameWarehouseInventories, setSameWarehouseInventories] = useState();
  const { warehouseId } = useParams();

  useEffect(() => {
    async function fetchSameWarehousesDetail() {
      const resp = await databases.getDocument(
        import.meta.env.VITE_INSTOCK_DATABASE_ID,
        import.meta.env.VITE_INSTOCK_WAREHOUSES_COLLECTION_ID,
        warehouseId
      )
      const data = resp
      console.log(data);
      setWarehouseDetail(data);
    }
    fetchSameWarehousesDetail();
  }, [warehouseId]);

  useEffect(() => {
    async function fetchSameWarehouseInventories() {
      const resp = await databases.listDocuments(
        import.meta.env.VITE_INSTOCK_DATABASE_ID,
        import.meta.env.VITE_INSTOCK_INVENTORIES_COLLECTION_ID,
        // Query.equal("", [""])
      )
      const inventoriesData = resp.documents;
      console.log(inventoriesData);
      const filteredInventoriesData = inventoriesData.filter((data) => data?.warehouses?.$id == "67202b9800281fc44cf9")
      console.log(filteredInventoriesData, "sameWarehouseData");
      setSameWarehouseInventories(filteredInventoriesData);
    }
    fetchSameWarehouseInventories();
  }, [warehouseId]);

  return (
    <div className="warehouses">
      <div className="warehouse">
        <div className="warehouse__heading-card">
          <h1 className="warehouse__main-heading">
            {warehouseDetail?.warehouseName}
          </h1>
          <Link
            to={`/warehouse/${warehouseId}/edit`}
            className="warehouse__editBtn"
          >
            Edit
          </Link>
        </div>
        <div className="warehouse__info-card">
          <div className="warehouse__detail-card">
            <div className="warehouse__detail-info-box1">
              <p className="warehouse__detail-address-heading">
                WAREHOUSE ADDRESS
              </p>
              <div className="warehouse__detail-address">
                {warehouseDetail?.warehouseAddress}, {warehouseDetail?.warehouseCity},{" "}
                {warehouseDetail?.warehouseCountry}
              </div>
            </div>

            <div className="warehouse__detail-info-containers">
              <div className="warehouse__info-container2">
                <p className="warehouse__detail-contact-name-heading">
                  CONTACT NAME
                </p>
                <div className="warehouse__detail-contact-person">
                  <p className="warehouse__detail-contact-name">
                    {warehouseDetail?.warehouseContactName}
                  </p>
                  <p className="warehouse__detail-contact-position">
                    {warehouseDetail?.warhouseContactPosition}
                  </p>
                </div>
              </div>

              <div className="warehouse__info-container3">
                <p className="warehouse__detail-contact-info-heading">
                  CONTACT INFO
                </p>
                <div className="warehouse__detail-contact-info">
                  <p className="warehouse__detail-contact-phone">
                    {warehouseDetail?.warehousePhoneNumber}
                  </p>
                  <p className="warehouse__detail-contact-email">
                    {warehouseDetail?.warehouseContactEmail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="warehouse__inventories">
        {sameWarehouseInventories?.map((warehouseInventories) => {
          return (
            <div className="warehouse__inventories-card" key={warehouseInventories?.$id}>
              <div className="warehouse__info-containers">
                <div className="warehouse__info-container4">
                  <p className="warehouse__inventory-item-heading">
                    INVENTORY ITEM
                  </p>
                  <Link
                    to={`/inventory/${warehouseInventories?.$id}`}
                    className="warehouse__inventory-item-name"
                  >
                    {warehouseInventories?.itemName}
                  </Link>
                  <p className="warehouse__inventory-category-heading">
                    CATEGORY
                  </p>
                  <div className="warehouse__inventory-category">
                    {warehouseInventories?.categories?.categoryName}
                  </div>
                </div>
                <div className="warehouse__info-container5">
                  <p className="warehouse__inventory-status-heading">STATUS</p>
                  <div className="warehouse__inventory-status">
                    {warehouseInventories?.itemStatus}
                  </div>
                  <p className="warehouse__inventory-quantity-heading">
                    QUANTITY
                  </p>
                  <div className="warehouse__inventory-quantity">
                    {warehouseInventories?.itemQuantity}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
