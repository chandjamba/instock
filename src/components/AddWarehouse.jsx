import { useState } from "react";
import "./addWarehouse.scss/";
import { Link, useNavigate } from "react-router-dom";
import { ID, databases } from "../lib/appwrite";

export default function AddWarehouse() {
  const [addWarehouse, setAddWarehouse] = useState();
  const navigate = useNavigate();

  const submitButtonHandler = async (event) => {
    event.preventDefault();
    try {
      await databases.createDocument(
        import.meta.env.VITE_INSTOCK_DATABASE_ID,
        import.meta.env.VITE_INSTOCK_WAREHOUSES_COLLECTION_ID,
        ID.unique(),
        {
          warehouseName: event.target.name.value,
          warehouseCity: event.target.city.value,
          warehouseCountry: event.target.country.value,
          warehouseEmail: event.target.email.value,
          warehousePhoneNumber: event.target.phoneNumber.value,
          warehouseContactPosition: event.target.position.value,
          warehouseAddress: event.target.address.value,
          warehouseContactName: event.target.contactName.value,
        }
      );
    } catch (error) {
      console.log(error);
    }
    navigate("/");
  };

  return (
    <form className="addWarehouses__main-form" onSubmit={submitButtonHandler}>
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
                  name="name"
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
                  name="address"
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
                  name="city"
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
                  name="country"
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
                  name="contactName"
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
                  name="position"
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
                  name="phoneNumber"
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
                  name="email"
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
              <button className="addWarehouse__save-btn" type="submit">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
