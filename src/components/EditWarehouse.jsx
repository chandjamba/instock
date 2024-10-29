import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./editWarehouse.scss";
import { databases } from "../lib/appwrite";

export default function EditWarehouse() {
  const [editWarehouse, setEditWarehouse] = useState();
  const { warehouseId } = useParams();

  useEffect(() => {
    async function fetchedEditWarehouse() {
      const resp = await databases.getDocument(
        import.meta.env.VITE_INSTOCK_DATABASE_ID,
        import.meta.env.VITE_INSTOCK_WAREHOUSES_COLLECTION_ID,
        warehouseId
      );
      const data = resp;
      console.log(data);
      setEditWarehouse(data);
    }
    fetchedEditWarehouse();
  }, [warehouseId]);

   async function saveEditWarehouse() {
    const resp = await databases.updateDocument(
      import.meta.env.VITE_INSTOCK_DATABASE_ID,
      import.meta.env.VITE_INSTOCK_WAREHOUSES_COLLECTION_ID,
      warehouseId
      );
      const data = resp;
      console.log(data, "parsedData");
      setEditWarehouse(data);
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
                value={editWarehouse?.warehouseName}
                onChange={(event) => {
                  console.log(event.target.value);
                  // setEditWarehouse({
                  //   ...editWarehouse,
                  //   warehouse_name: event.target.value,
                  // });
                  setEditWarehouse((pureState) => {
                    return {
                      ...pureState,
                      warehouseName: event.target.value,
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
                value={editWarehouse?.warehouseAddress}
                onChange={(event) => {
                  console.log(event.target.value);

                  setEditWarehouse((pureState) => {
                    return {
                      ...pureState,
                      warehouseAddress: event.target.value,
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
                value={editWarehouse?.warehouseCity}
                onChange={(event) => {
                  console.log(event.target.value);
                  // setEditWarehouse({
                  //   ...editWarehouse,
                  //   city: event.target.value,
                  // });
                  setEditWarehouse((pureState) => {
                    return {
                      ...pureState,
                      warehouseCity: event.target.value,
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
                value={editWarehouse?.warehouseCountry}
                onChange={(event) => {
                  console.log(event.target.value);
                  setEditWarehouse((pureState) => {
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
                value={editWarehouse?.warehouseContactName}
                onChange={(event) => {
                  console.log(event.target.value);
                  setEditWarehouse((pureState) => {
                    return {
                      ...pureState,
                      warehouseContactName: event.target.value,
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
                value={editWarehouse?.warehouseContactPosition}
                onChange={(event) => {
                  console.log(event.target.value);
                  setEditWarehouse((pureState) => {
                    return {
                      ...pureState,
                      warehouseContactPosition: event.target.value,
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
                value={editWarehouse?.warehousePhoneNumber}
                onChange={(event) => {
                  console.log(event.target.value);
                  setEditWarehouse((pureState) => {
                    return {
                      ...pureState,
                      warehousePhoneumber: event.target.value,
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
                value={editWarehouse?.warehouseEmail}
                onChange={(event) => {
                  console.log(event.target.value);
                  setEditWarehouse((pureState) => {
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

        <div className="editWarehouse__buttons-container">
          <div className="ediWarehouse__cancel-btn-container">
            <Link to={`/`} className="editWarehouse__cancel-btn">
              Cancel
            </Link>
          </div>

          <div className="ediWarehouse__save-btn-container">
            <button
              onClick={saveEditWarehouse}
              className="editWarehouse__save-btn"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
