import { useEffect, useState } from "react";
import "./warehouse.scss";
import { Link } from "react-router-dom";
import { databases } from "../lib/appwrite";

export default function Warehouse() {
  const [warehouses, setWarehouses] = useState();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    async function fetchedWarehousesData() {
      const resp = await databases.listDocuments(
        import.meta.env.VITE_INSTOCK_DATABASE_ID,
        import.meta.env.VITE_INSTOCK_WAREHOUSES_COLLECTION_ID
      );
      const data = resp.documents;
      console.log(data);
      setWarehouses(data);
    }
    fetchedWarehousesData();
  }, []);

  async function handleSearchButton() {
    const searchParam = new URLSearchParams({ s: searchValue }).toString();
    console.log(searchParam);
    const url = `https://instock-api-cj.onrender.com/api/warehouses?${searchParam}`;
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    setWarehouses(data);
  }

  return (
    <div className="warehouses">
      <div className="warehouse">
        <h1 className="warehouse__main-heading">Warehouses</h1>
        <div className="warehouse__input-section">
          <input
            className="warehouse__input"
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
              console.log(event.target.value);
            }}
          />
          <button
            onClick={handleSearchButton}
            className="warehouse__search-button"
          >
            🔎
          </button>
        </div>
        <Link to={"/warehouse/addWarehouse"} className="warehouse__add-btn">
          {" "}
          + Add New Warehouse
        </Link>
        <div className="warehouses__list">
          {warehouses?.map((warehouse) => {
            return (
              <div className="warehouse-card1" key={warehouse?.$id}>
                <div className="warehouse__info">
                  <div className="warehouse__info-box1">
                    <p className="warehouse__heading">WAREHOUSE</p>
                    <Link
                      to={`/warehouse/${warehouse?.$id}`}
                      className="warehouse__location"
                    >
                      {warehouse?.warehouseName}
                    </Link>
                    <p className="warehouse__address-heading">ADDRESS</p>
                    <div className="warehouse__address">
                      {warehouse?.warehouseAddress}, {warehouse?.warehouseCity},{" "}
                      {warehouse?.warehouseCountry}
                    </div>
                  </div>
                  <div className="warehouse__info-box2">
                    <p className="warehouse__name-heading">CONTACT NAME</p>
                    <div className="warehouse__contact-name">
                      {warehouse?.warehouseContactName}
                    </div>
                    <p className="warehouse__contact-heading">CONTACT</p>
                    <div className="warehouse__contact">
                      <p className="warehouse__contact-phone">
                        {warehouse?.contact_phone}
                      </p>
                      <p className="warehouse__contact-email">
                        {warehouse?.warehouseEmail}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="warehouse__card-btn">
                  <Link
                    to={`/warehouse/${warehouse?.$id}/delete`}
                    className="warehouse-delete"
                  >
                    Delete
                  </Link>
                  <Link
                    to={`warehouse/${warehouse?.$id}/edit`}
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
