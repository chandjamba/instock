import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./warehouseDetail.scss";

const url2 = "https://instock-api-cj.onrender.com/api/inventories";

export default function WarehouseDetail() {
  const [warehouseDetail, setWarehouseDetail] = useState();
  const [sameWarehouses, setSameWarehouses] = useState();
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
    async function fetchedSameWarehouses() {
      const resp = await fetch(url2);
      const data = await resp.json();
      console.log(data);
      setSameWarehouses(data);
    }
    fetchedSameWarehouses();
  }, []);

  return (
    <div className="warehouses">
      <div className="warehouse">
        <div className="warehouse__heading-card">
          <h1 className="warehouse__main-heading">
            {warehouseDetail?.warehouse_name}
          </h1>
          <button className="warehouse__editBtn">Edit</button>
        </div>
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
      <div className="warehouse__items">
      </div>
    </div>
  );
}
