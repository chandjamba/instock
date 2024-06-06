import { useEffect, useState } from "react";
import "./warehouses.scss";

const url = "https://instock-api-cj.onrender.com/api/warehouses";

export default function Warehouses() {
  const [warehouses, setWarehouses] = useState();

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
        ></input>
        <button className="warehouse__add-btn"> + Add New Warehouse</button>
        <div className="warehouses__list">
          {/* {warehouses?.map((warehouse) => {
            return <div className="card1">{warehouse?.warehouse_name}</div>;
          })} */}
          <div className="warehouse-card1">
            <div className="warehouse__info">
              <div className="warehouse__info-box1">
                <p className="warehouse__heading">WAREHOUSE</p>
                <div className="warehouse__location">
                  {warehouses?.[0]?.warehouse_name}
                </div>
                <p className="warehouse__address-heading">ADDRESS</p>
                <div className="warehouse__address">
                  {warehouses?.[0]?.address}, {warehouses?.[0]?.city},{" "}
                  {warehouses?.[0]?.country}
                </div>
              </div>
              <div className="warehouse__info-box2">
                <p className="warehouse__name-heading">CONTACT NAME</p>
                <div className="warehouse__contact-name">
                  {warehouses?.[0]?.contact_name}
                </div>
                <div className="warehouse__contact">
                  <p className="warehouse__contact-heading">CONTACT</p>
                  <p className="warehouse__contact-phone">
                    {warehouses?.[0]?.contact_phone}
                  </p>
                  <p className="warehouse__contact-email">
                    {warehouses?.[0]?.contact_email}
                  </p>
                </div>
              </div>
            </div>
            <div className="warehouse__card-btn">
              <button className="warehouse-delete">Delete</button>
              <button className="warehouse-edit">Edit</button>
            </div>
          </div>

          <div className="warehouse-card2">
            <div className="warehouse__info">
              <div className="warehouse__info-box1">
                <p className="warehouse__heading">WAREHOUSE</p>
                <div className="warehouse__location">
                  {warehouses?.[1]?.warehouse_name}
                </div>
                <p className="warehouse__address-heading">ADDRESS</p>
                <div className="warehouse__address">
                  {warehouses?.[1]?.address}, {warehouses?.[1]?.city},{" "}
                  {warehouses?.[1]?.country}
                </div>
              </div>
              <div className="warehouse__info-box2">
                <p className="warehouse__name-heading">CONTACT NAME</p>
                <div className="warehouse__contact-name">
                  {warehouses?.[1]?.contact_name}
                </div>
                <div className="warehouse__contact">
                  <p className="warehouse__contact-heading">CONTACT</p>
                  <p className="warehouse__contact-phone">
                    {warehouses?.[1]?.contact_phone}
                  </p>
                  <p className="warehouse__contact-email">
                    {warehouses?.[1]?.contact_email}
                  </p>
                </div>
              </div>
            </div>
            <div className="warehouse__card-btn">
              <button className="warehouse-delete">Delete</button>
              <button className="warehouse-edit">Edit</button>
            </div>
          </div>
          <div className="warehouse-card3">
            <div className="warehouse__info">
              <div className="warehouse__info-box1">
                <p className="warehouse__heading">WAREHOUSE</p>
                <div className="warehouse__location">
                  {warehouses?.[2]?.warehouse_name}
                </div>
                <p className="warehouse__address-heading">ADDRESS</p>
                <div className="warehouse__address">
                  {warehouses?.[2]?.address}, {warehouses?.[2]?.city},{" "}
                  {warehouses?.[2]?.country}
                </div>
              </div>
              <div className="warehouse__info-box2">
                <p className="warehouse__name-heading">CONTACT NAME</p>
                <div className="warehouse__contact-name">
                  {warehouses?.[2]?.contact_name}
                </div>
                <div className="warehouse__contact">
                  <p className="warehouse__contact-heading">CONTACT</p>
                  <p className="warehouse__contact-phone">
                    {warehouses?.[2]?.contact_phone}
                  </p>
                  <p className="warehouse__contact-email">
                    {warehouses?.[2]?.contact_email}
                  </p>
                </div>
              </div>
            </div>
            <div className="warehouse__card-btn">
              <button className="warehouse-delete">Delete</button>
              <button className="warehouse-edit">Edit</button>
            </div>
          </div>
          <div className="warehouse-card4">
            <div className="warehouse__info">
              <div className="warehouse__info-box1">
                <p className="warehouse__heading">WAREHOUSE</p>
                <div className="warehouse__location">
                  {warehouses?.[3]?.warehouse_name}
                </div>
                <p className="warehouse__address-heading">ADDRESS</p>
                <div className="warehouse__address">
                  {warehouses?.[3]?.address}, {warehouses?.[3]?.city},{" "}
                  {warehouses?.[3]?.country}
                </div>
              </div>
              <div className="warehouse__info-box2">
                <p className="warehouse__name-heading">CONTACT NAME</p>
                <div className="warehouse__contact-name">
                  {warehouses?.[3]?.contact_name}
                </div>
                <div className="warehouse__contact">
                  <p className="warehouse__contact-heading">CONTACT</p>
                  <p className="warehouse__contact-phone">
                    {warehouses?.[3]?.contact_phone}
                  </p>
                  <p className="warehouse__contact-email">
                    {warehouses?.[3]?.contact_email}
                  </p>
                </div>
              </div>
            </div>
            <div className="warehouse__card-btn">
              <button className="warehouse-delete">Delete</button>
              <button className="warehouse-edit">Edit</button>
            </div>
          </div>
          <div className="warehouse-card5">
            <div className="warehouse__info">
              <div className="warehouse__info-box1">
                <p className="warehouse__heading">WAREHOUSE</p>
                <div className="warehouse__location">
                  {warehouses?.[4]?.warehouse_name}
                </div>
                <p className="warehouse__address-heading">ADDRESS</p>
                <div className="warehouse__address">
                  {warehouses?.[4]?.address}, {warehouses?.[4]?.city},{" "}
                  {warehouses?.[4]?.country}
                </div>
              </div>
              <div className="warehouse__info-box2">
                <p className="warehouse__name-heading">CONTACT NAME</p>
                <div className="warehouse__contact-name">
                  {warehouses?.[4]?.contact_name}
                </div>
                <div className="warehouse__contact">
                  <p className="warehouse__contact-heading">CONTACT</p>
                  <p className="warehouse__contact-phone">
                    {warehouses?.[4]?.contact_phone}
                  </p>
                  <p className="warehouse__contact-email">
                    {warehouses?.[4]?.contact_email}
                  </p>
                </div>
              </div>
            </div>
            <div className="warehouse__card-btn">
              <button className="warehouse-delete">Delete</button>
              <button className="warehouse-edit">Edit</button>
            </div>
          </div>
          <div className="warehouse-card6">
            <div className="warehouse__info">
              <div className="warehouse__info-box1">
                <p className="warehouse__heading">WAREHOUSE</p>
                <div className="warehouse__location">
                  {warehouses?.[5]?.warehouse_name}
                </div>
                <p className="warehouse__address-heading">ADDRESS</p>
                <div className="warehouse__address">
                  {warehouses?.[5]?.address}, {warehouses?.[5]?.city},{" "}
                  {warehouses?.[5]?.country}
                </div>
              </div>
              <div className="warehouse__info-box2">
                <p className="warehouse__name-heading">CONTACT NAME</p>
                <div className="warehouse__contact-name">
                  {warehouses?.[5]?.contact_name}
                </div>
                <div className="warehouse__contact">
                  <p className="warehouse__contact-heading">CONTACT</p>
                  <p className="warehouse__contact-phone">
                    {warehouses?.[5]?.contact_phone}
                  </p>
                  <p className="warehouse__contact-email">
                    {warehouses?.[5]?.contact_email}
                  </p>
                </div>
              </div>
            </div>
            <div className="warehouse__card-btn">
              <button className="warehouse-delete">Delete</button>
              <button className="warehouse-edit">Edit</button>
            </div>
          </div>
          <div className="warehouse-card7">
            <div className="warehouse__info">
              <div className="warehouse__info-box1">
                <p className="warehouse__heading">WAREHOUSE</p>
                <div className="warehouse__location">
                  {warehouses?.[6]?.warehouse_name}
                </div>
                <p className="warehouse__address-heading">ADDRESS</p>
                <div className="warehouse__address">
                  {warehouses?.[6]?.address}, {warehouses?.[6]?.city},{" "}
                  {warehouses?.[6]?.country}
                </div>
              </div>
              <div className="warehouse__info-box2">
                <p className="warehouse__name-heading">CONTACT NAME</p>
                <div className="warehouse__contact-name">
                  {warehouses?.[6]?.contact_name}
                </div>
                <div className="warehouse__contact">
                  <p className="warehouse__contact-heading">CONTACT</p>
                  <p className="warehouse__contact-phone">
                    {warehouses?.[6]?.contact_phone}
                  </p>
                  <p className="warehouse__contact-email">
                    {warehouses?.[6]?.contact_email}
                  </p>
                </div>
              </div>
            </div>
            <div className="warehouse__card-btn">
              <button className="warehouse-delete">Delete</button>
              <button className="warehouse-edit">Edit</button>
            </div>
          </div>
          <div className="warehouse-card8">
            <div className="warehouse__info">
              <div className="warehouse__info-box1">
                <p className="warehouse__heading">WAREHOUSE</p>
                <div className="warehouse__location">
                  {warehouses?.[7]?.warehouse_name}
                </div>
                <p className="warehouse__address-heading">ADDRESS</p>
                <div className="warehouse__address">
                  {warehouses?.[7]?.address}, {warehouses?.[7]?.city},{" "}
                  {warehouses?.[7]?.country}
                </div>
              </div>
              <div className="warehouse__info-box2">
                <p className="warehouse__name-heading">CONTACT NAME</p>
                <div className="warehouse__contact-name">
                  {warehouses?.[7]?.contact_name}
                </div>
                <div className="warehouse__contact">
                  <p className="warehouse__contact-heading">CONTACT</p>
                  <p className="warehouse__contact-phone">
                    {warehouses?.[7]?.contact_phone}
                  </p>
                  <p className="warehouse__contact-email">
                    {warehouses?.[7]?.contact_email}
                  </p>
                </div>
              </div>
            </div>
            <div className="warehouse__card-btn">
              <button className="warehouse-delete">Delete</button>
              <button className="warehouse-edit">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
