import { useEffect, useState } from "react";
import "./warehouse.scss";
import { Link, useParams } from "react-router-dom";

const url = "https://instock-api-cj.onrender.com/api/warehouses";

export default function Warehouse() {
  const [warehouses, setWarehouses] = useState();
  const { warehouseId } = useParams();

  useEffect(() => {
    async function fetchedWarehousesData() {
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setWarehouses(data);
    }
    fetchedWarehousesData();
  }, []);

  return (
    <div className="warehouses">
      <div className="warehouse">
        <h1 className="warehouse__main-heading">Warehouses</h1>
        <input
          className="warehouse__input"
          type="text"
          placeholder="Search..."
        />
        <Link to={"/warehouse/addWarehouse"} className="warehouse__add-btn">
          {" "}
          + Add New Warehouse
        </Link>
        <div className="warehouses__list">
          {warehouses?.map((warehouse) => {
            return (
              <div className="warehouse-card1" key={warehouse?.id}>
                <div className="warehouse__info">
                  <div className="warehouse__info-box1">
                    <p className="warehouse__heading">WAREHOUSE</p>
                    <Link
                      to={`/warehouse/${warehouse?.id}`}
                      className="warehouse__location"
                    >
                      {warehouse?.warehouse_name}
                    </Link>
                    <p className="warehouse__address-heading">ADDRESS</p>
                    <div className="warehouse__address">
                      {warehouse?.address}, {warehouse?.city},{" "}
                      {warehouse?.country}
                    </div>
                  </div>
                  <div className="warehouse__info-box2">
                    <p className="warehouse__name-heading">CONTACT NAME</p>
                    <div className="warehouse__contact-name">
                      {warehouse?.contact_name}
                    </div>
                    <p className="warehouse__contact-heading">CONTACT</p>
                    <div className="warehouse__contact">
                      <p className="warehouse__contact-phone">
                        {warehouse?.contact_phone}
                      </p>
                      <p className="warehouse__contact-email">
                        {warehouse?.contact_email}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="warehouse__card-btn">
                  <Link 
                  to={`/warehouse/${warehouseId}/delete`}
                  className="warehouse-delete">Delete</Link>
                  <Link
                    to={`./warehouse/${warehouseId}/edit`}
                    className="warehouse-edit"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
