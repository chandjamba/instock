import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./warehouseDetail.scss";


export default function WarehouseDetail() {
  const [warehouseDetail, setWarehouseDetail] = useState();
  const [sameWarehouse, setSameWarehouse] = useState();
  const { warehouseId } = useParams();
  
  useEffect(() => {
    async function fetchedWarehousesDetail() {
      const url = `https://instock-api-cj.onrender.com/api/warehouses/${warehouseId}`;
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setWarehouseDetail(data);
    }
    fetchedWarehousesDetail();
  }, [warehouseId]);
  
  useEffect(() => {
    async function fetchedSameWarehouse() {
      const url2 = `https://instock-api-cj.onrender.com/api/warehouses/${warehouseId}/inventories`;
      const resp = await fetch(url2);
      const data = await resp.json();
      console.log(data);
      setSameWarehouse(data);
    }
    fetchedSameWarehouse();
  }, [warehouseId]);

  return (
    <div className="warehouses">
      <div className="warehouse">
        <div className="warehouse__heading-card">
          <h1 className="warehouse__main-heading">
            {warehouseDetail?.warehouse_name}
          </h1>
          <button className="warehouse__editBtn">Edit</button>
        </div>
        <div className="warehouse__info-card">
        <div className="warehouse__detail-card">
          <div className="warehouse__detail-info-box1">
            <p className="warehouse__detail-address-heading">
              WAREHOUSE ADDRESS
            </p>
            <div className="warehouse__detail-address">
              {warehouseDetail?.address}, {warehouseDetail?.warehouse_name},{" "}
              {warehouseDetail?.country}
            </div>
          </div>

          <div className="warehouse__detail-info-containers">
            <div className="warehouse__info-container2">
              <p className="warehouse__detail-contact-name-heading">
                CONTACT NAME
              </p>
              <div className="warehouse__detail-contact-person">
                <p className="warehouse__detail-contact-name">
                  {warehouseDetail?.contact_name}
                </p>
                <p className="warehouse__detail-contact-position">
                  {warehouseDetail?.contact_position}
                </p>
              </div>
            </div>

            <div className="warehouse__info-container3">
              <p className="warehouse__detail-contact-info-heading">
                CONTACT INFO
              </p>
              <div className="warehouse__detail-contact-info">
                <p className="warehouse__detail-contact-phone">
                  {warehouseDetail?.contact_phone}
                </p>
                <p className="warehouse__detail-contact-email">
                  {warehouseDetail?.contact_email}
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="warehouse__inventories">
        {sameWarehouse.map((warehouse)=> {
          return(
      <div className="warehouse__inventories-card">
        <div className="warehouse__info-containers">
          <div className="warehouse__info-container4">
          <p className="warehouse__inventory-item-heading">INVENTORY ITEM</p>
                    <div
                      className="warehouse__inventory-item-name"
                      // to={`/inventory/${inventory?.id}`}
                    >
                      {warehouse?.item_name}
                    </div>
                    <p className="warehouse__inventory-category-heading">CATEGORY</p>
                    <div className="warehouse__inventory-category">
                      {warehouse?.category}
                    </div>
          </div>
          <div className="warehouse__info-container5">
          <p className="warehouse__inventory-status-heading">STATUS</p>
                    <div className="warehouse__inventory-status">{warehouse?.status}</div>
                    <p className="warehouse__inventory-quantity-heading">QUANTITY</p>
                    <div className="warehouse__inventory-quantity">
                      {warehouse?.quantity}
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
