import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./editWarehouse.scss";

export default function EditWarehouse() {
  const [editWarehouse, setEditWarehouse] = useState();
  const { warehouseId } = useParams();

  useEffect(() => {
    async function fetchedEditWarehouse() {
      const url = `https://instock-api-cj.onrender.com/api/warehouses/${warehouseId}`;
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setEditWarehouse(data);
    }
    fetchedEditWarehouse();
  }, [warehouseId]);
  return (
    <div className="editWarehouses">
      <div className="editWarehouse">
        <div className="editWarehouse__heading-card">
          <h1 className="editWarehouse__main-heading"> Edit Warehouse</h1>
        </div>
        <div className="editWarehouse__details">
          <div className="editWarehouse__details-heading">
            <h1 className="editWarehouse__details-heading-text">
              {" "}
              Warehouse Details
            </h1>
          </div>
          <div className="editWarehouse__details-input-section">
            <div className="editWarehouse__name-input-section">
              <div className="editWarehouse__name">Warehouse Name</div>
              <input
                className="editWarehouse__name-input"
                type="text"
                placeholder=""
              ></input>
            </div>

            <div className="editWarehouse__street-address-input-section">
              <p className="editWarehouse__street-address">Street Address</p>
              <input
                className="editWarehouse__street-address-input"
                type="text"
                placeholder=""
              ></input>
            </div>

            <div className="editWarehouse__city-input-section">
              <p className="editWarehouse__city">City</p>
              <input
                className="editWarehouse__city-input"
                type="text"
                placeholder=""
              ></input>
            </div>

            <div className="editWarehouse__country-input-section">
              <p className="editWarehouse__country">Country</p>
              <input
                className="editWarehouse__country-input"
                type="text"
                placeholder=""
              ></input>
            </div>
          </div>
        </div>

        <div className="editWarehouse__contact-details">
          <div className="editWarehouse__contact-details-heading">
            <h1 className="editWarehouse__contact-details-heading-text">
              {" "}
              Contact Details
            </h1>
          </div>
          <div className="editWarehouse__contact-details-input-section">
            <div className="editWarehouse__contact-name-input-section">
              <div className="editWarehouse__contact-name">Contact Name</div>
              <input
                className="editWarehouse__contact-name-input"
                type="text"
                placeholder=""
              ></input>
            </div>

            <div className="editWarehouse__contact-position-input-section">
              <p className="editWarehouse__contact-position">Position</p>
              <input
                className="editWarehouse__contact-position-input"
                type="text"
                placeholder=""
              ></input>
            </div>

            <div className="editWarehouse__contact-number-input-section">
              <p className="editWarehouse__contact-number">Phone Number</p>
              <input
                className="editWarehouse__contact-number-input"
                type="text"
                placeholder=""
              ></input>
            </div>

            <div className="editWarehouse__contact-email-input-section">
              <p className="editWarehouse__contact-email">Email</p>
              <input
                className="editWarehouse__contact-email-input"
                type="text"
                placeholder=""
              ></input>
            </div>
          </div>
        </div>

        <div className="editWarehouse__buttons-container">
          <div className="ediWarehouse__cancel-btn-container">
            <button className="editWarehouse__cancel-btn">Cancel</button>
          </div>

          <div className="ediWarehouse__save-btn-container">
            <button className="editWarehouse__save-btn">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
