import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./editWarehouse.scss";
import axios from "axios";

export default function EditWarehouse() {
  const [editWarehouse, setEditWarehouse] = useState();
  const { warehouseId } = useParams();

  useEffect(() => {
    async function fetchedEditWarehouse() {
      const url = `https://instock-api-cj.onrender.com/api/warehouses/${warehouseId}`;
      const resp = await fetch(url);
      const data = await resp.json();
      setEditWarehouse(data);
    }
    fetchedEditWarehouse();
  }, [warehouseId]);
  console.log(editWarehouse);

async function editedWarehouse() {
  const url = `https://instock-api-cj.onrender.com/api/warehouses/${warehouseId}`;
  const resp = await axios.put(url, editWarehouse);
  console.log(resp, "parsedData")
}

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
                placeholder="Warehouse name..."
                value={editWarehouse?.warehouse_name}
                onChange={(event) => {
                  // console.log(event.target.value);
                  // setEditWarehouse({
                  //   ...editWarehouse,
                  //   warehouse_name: event.target.value,
                  // });
                  setEditWarehouse((pureState) => {
                    return {
                      ...pureState,
                      warehouse_name: event.target.value,
                    };
                  });
                }}
              />
            </div>

            <div className="editWarehouse__street-address-input-section">
              <p className="editWarehouse__street-address">Street Address</p>
              <input
                className="editWarehouse__street-address-input"
                type="text"
                placeholder="Address"
                value={editWarehouse?.address}
                onChange={(event) => {
                  console.log(event.target.value);

                  setEditWarehouse((pureState) => {
                    return {
                      ...pureState,
                      address: event.target.value,
                    };
                  });
                }}
              />
            </div>

            <div className="editWarehouse__city-input-section">
              <p className="editWarehouse__city">City</p>
              <input
                className="editWarehouse__city-input"
                type="text"
                placeholder="City"
                value={editWarehouse?.city}
                onChange={(event) => {
                  console.log(event.target.value);
                  // setEditWarehouse({
                  //   ...editWarehouse,
                  //   city: event.target.value,
                  // });
                  setEditWarehouse((pureState) => {
                    return {
                      ...pureState,
                      city: event.target.value,
                    };
                  });
                }}
              />
            </div>

            <div className="editWarehouse__country-input-section">
              <p className="editWarehouse__country">Country</p>
              <input
                className="editWarehouse__country-input"
                type="text"
                placeholder="Country"
                value={editWarehouse?.country}
                onChange={(event) => {
                  console.log(event.target.value);
                  setEditWarehouse((pureState) => {
                    return {
                      ...pureState,
                      country: event.target.value,
                    };
                  });
                }}
              />
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
                placeholder="Name"
                value={editWarehouse?.contact_name}
                onChange={(event) => {
                  console.log(event.target.value);
                  setEditWarehouse((pureState) => {
                    return {
                      ...pureState,
                      contact_name: event.target.value,
                    };
                  });
                }}
              />
            </div>

            <div className="editWarehouse__contact-position-input-section">
              <p className="editWarehouse__contact-position">Position</p>
              <input
                className="editWarehouse__contact-position-input"
                type="text"
                placeholder="position"
                value={editWarehouse?.contact_position}
                onChange={(event) => {
                  console.log(event.target.value);
                  setEditWarehouse((pureState) => {
                    return {
                      ...pureState,
                      contact_position: event.target.value,
                    };
                  });
                }}
              />
            </div>

            <div className="editWarehouse__contact-number-input-section">
              <p className="editWarehouse__contact-number">Phone Number</p>
              <input
                className="editWarehouse__contact-number-input"
                type="text"
                placeholder="Phone number"
                value={editWarehouse?.contact_phone}
                onChange={(event) => {
                  console.log(event.target.value);
                  setEditWarehouse((pureState) => {
                    return {
                      ...pureState,
                      contact_number: event.target.value,
                    };
                  });
                }}
              />
            </div>

            <div className="editWarehouse__contact-email-input-section">
              <p className="editWarehouse__contact-email">Email</p>
              <input
                className="editWarehouse__contact-email-input"
                type="text"
                placeholder="Email"
                value={editWarehouse?.contact_email}
                onChange={(event) => {
                  console.log(event.target.value);
                  setEditWarehouse((pureState) => {
                    return {
                      ...pureState,
                      contact_email: event.target.value,
                    };
                  });
                }}
              />
            </div>
          </div>
        </div>

        <div className="editWarehouse__buttons-container">
          <div className="ediWarehouse__cancel-btn-container">
            <Link to={`/`} className="editWarehouse__cancel-btn">
              Cancel
            </Link>
          </div>

          <div className="ediWarehouse__save-btn-container">
            <button 
            onClick={editedWarehouse}
            className="editWarehouse__save-btn">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
