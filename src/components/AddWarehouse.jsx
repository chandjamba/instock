import { useState } from "react";
import "./addWarehouse.scss/";
import { Link } from "react-router-dom";
import { ID, databases } from "../lib/appwrite";

export default function AddWarehouse() {
  const [addWarehouse, setAddWarehouse] = useState();
  async function createWarehouse() {
    const resp = await databases.createDocument(
      import.meta.env.VITE_INSTOCK_DATABASE_ID,
      import.meta.env.VITE_INSTOCK_WAREHOUSES_COLLECTION_ID,
      ID.unique()
      {
        warehouseId: ID.unique(),
        warehouseName: event.target.warehouseName.value,
      }
    );
  
    const data =resp;
    console.log(data, "parsedData");
  }
  return (
    <div className="addWarehouses">
      <div className="addWarehouse">
        <div className="addWarehouse__heading-card">
          <h1 className="addWarehouse__main-heading"> Add New Warehouse</h1>
        </div>
        <div className="addWarehouse__details">
          <div className="addWarehouse__details-heading">
            <h1 className="addWarehouse__details-heading-text">
              {" "}
              Warehouse Details
            </h1>
          </div>
          <div className="addWarehouse__details-input-section">
            <div className="addWarehouse__name-input-section">
              <div className="addWarehouse__name">Warehouse Name</div>
              <input
                className="addWarehouse__name-input"
                name="warehouseName"
                type="text"
                placeholder="Warehouse name"
                value={addWarehouse?.warehouseName}
                onChange={(event) => {
                  console.log(event.target.value);
                  // setAddWarehouse({
                  //   ...addWarehouse,
                  //   warehouse_name: event.target.value,
                  // });
                  setAddWarehouse((pureState) => {
                    return {
                      ...pureState,
                      warehouseName: event.target.value,
                    };
                  });
                }}
              />
            </div>

            <div className="addWarehouse__street-address-input-section">
              <p className="addWarehouse__street-address">Street Address</p>
              <input
                className="addWarehouse__street-address-input"
                type="text"
                placeholder="Address"
                value={addWarehouse?.warehouseAddress}
                onChange={(event) => {
                  console.log(event.target.value);

                  setAddWarehouse((pureState) => {
                    return {
                      ...pureState,
                      warehouseAddress: event.target.value,
                    };
                  });
                }}
              />
            </div>

            <div className="addWarehouse__city-input-section">
              <p className="addWarehouse__city">City</p>
              <input
                className="addWarehouse__city-input"
                type="text"
                placeholder="City"
                value={addWarehouse?.warehouseCity}
                onChange={(event) => {
                  console.log(event.target.value);
                  // setAddWarehouse({
                  //   ...addWarehouse,
                  //   city: event.target.value,
                  // });
                  setAddWarehouse((pureState) => {
                    return {
                      ...pureState,
                      warehouseCity: event.target.value,
                    };
                  });
                }}
              />
            </div>

            <div className="addWarehouse__country-input-section">
              <p className="addWarehouse__country">Country</p>
              <input
                className="addWarehouse__country-input"
                type="text"
                placeholder="Country"
                value={addWarehouse?.warehouseCountry}
                onChange={(event) => {
                  console.log(event.target.value);
                  setAddWarehouse((pureState) => {
                    return {
                      ...pureState,
                      warehouseCountry: event.target.value,
                    };
                  });
                }}
              />
            </div>
          </div>
        </div>

        <div className="addWarehouse__contact-details">
          <div className="addWarehouse__contact-details-heading">
            <h1 className="addWarehouse__contact-details-heading-text">
              {" "}
              Contact Details
            </h1>
          </div>
          <div className="addWarehouse__contact-details-input-section">
            <div className="addWarehouse__contact-name-input-section">
              <div className="addWarehouse__contact-name">Contact Name</div>
              <input
                className="addWarehouse__contact-name-input"
                type="text"
                placeholder="Name"
                value={addWarehouse?.warehouseContactName}
                onChange={(event) => {
                  console.log(event.target.value);
                  setAddWarehouse((pureState) => {
                    return {
                      ...pureState,
                      warehouseContactName: event.target.value,
                    };
                  });
                }}
              />
            </div>

            <div className="addWarehouse__contact-position-input-section">
              <p className="addWarehouse__contact-position">Position</p>
              <input
                className="addWarehouse__contact-position-input"
                type="text"
                placeholder="Position"
                value={addWarehouse?.warehouseContactPosition}
                onChange={(event) => {
                  console.log(event.target.value);
                  setAddWarehouse((pureState) => {
                    return {
                      ...pureState,
                      warehouseContactPosition: event.target.value,
                    };
                  });
                }}
              />
            </div>

            <div className="addWarehouse__contact-number-input-section">
              <p className="addWarehouse__contact-number">Phone Number</p>
              <input
                className="addWarehouse__contact-number-input"
                type="text"
                placeholder="Phone number"
                value={addWarehouse?.warehousePhoneNumber}
                onChange={(event) => {
                  console.log(event.target.value);
                  setAddWarehouse((pureState) => {
                    return {
                      ...pureState,
                      warehousePhoneNumber: event.target.value,
                    };
                  });
                }}
              />
            </div>

            <div className="addWarehouse__contact-email-input-section">
              <p className="addWarehouse__contact-email">Email</p>
              <input
                className="addWarehouse__contact-email-input"
                type="text"
                placeholder="Email"
                value={addWarehouse?.warehouseEmail}
                onChange={(event) => {
                  console.log(event.target.value);
                  setAddWarehouse((pureState) => {
                    return {
                      ...pureState,
                      warehouseEmail: event.target.value,
                    };
                  });
                }}
              />
            </div>
          </div>
        </div>

        <div className="addWarehouse__buttons-container">
          <div className="addWarehouse__cancel-btn-container">
            <Link to={"/"} className="addWarehouse__cancel-btn">
              Cancel
            </Link>
          </div>

          <div className="addWarehouse__save-btn-container">
            <button
              className="addWarehouse__save-btn"
              onClick={createWarehouse}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
