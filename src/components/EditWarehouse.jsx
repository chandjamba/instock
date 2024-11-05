import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./editWarehouse.scss";
import { databases } from "../lib/appwrite";

export default function EditWarehouse() {
  const [editWarehouse, setEditWarehouse] = useState();
  const { warehouseId } = useParams();
  const navigate = useNavigate();
  const warehouseName = useRef();
  const warehouseAddress = useRef();
  const warehouseCity = useRef();
  const warehouseCountry = useRef();
  const warehouseContactName = useRef();
  const warehouseContactPosition = useRef();
  const warehousePhoneNumber = useRef();
  const warehouseEmail = useRef();

  useEffect(() => {
    async function fetchEditWarehouse() {
      const resp = await databases.getDocument(
        import.meta.env.VITE_INSTOCK_DATABASE_ID,
        import.meta.env.VITE_INSTOCK_WAREHOUSES_COLLECTION_ID,
        warehouseId
      );
      const data = resp;
      console.log(data);
      setEditWarehouse(data);
    }
    fetchEditWarehouse();
  }, [warehouseId]);

  const saveButtonHandler = async (event) => {
    event.preventDefault();
    const resp = await databases.updateDocument(
      import.meta.env.VITE_INSTOCK_DATABASE_ID,
      import.meta.env.VITE_INSTOCK_WAREHOUSES_COLLECTION_ID,
      warehouseId,
      {
        warehouseName: event.target.warehouseName.value,
        warehouseAddress: event.target.address.value,
        warehouseCity: event.target.city.value,
        warehouseCountry: event.target.country.value,
        warehouseContactName: event.target.contactName.value,
        warehouseContactPosition: event.target.position.value,
        warehousePhoneNumber: event.target.phoneNumber.value,
        warehouseEmail: event.target.email.value,
      }
    );
    const data = resp;
    console.log(data, "editedData");
    setEditWarehouse(data);
    navigate("/")
  };

  return (
    <form className="editWarehouse__main-form" onSubmit={saveButtonHandler}>
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
                  name="warehouseName"
                  type="text"
                  placeholder="Warehouse name..."
                  defaultValue={editWarehouse?.warehouseName}
                  ref={warehouseName}
                />
              </div>

              <div className="editWarehouse__street-address-input-section">
                <p className="editWarehouse__street-address">Street Address</p>
                <input
                  className="editWarehouse__street-address-input"
                  name="address"
                  type="text"
                  placeholder="Address"
                  defaultValue={editWarehouse?.warehouseAddress}
                  ref={warehouseAddress}
                />
              </div>

              <div className="editWarehouse__city-input-section">
                <p className="editWarehouse__city">City</p>
                <input
                  className="editWarehouse__city-input"
                  name="city"
                  type="text"
                  placeholder="City"
                  defaultValue={editWarehouse?.warehouseCity}
                  ref={warehouseCity}
                />
              </div>

              <div className="editWarehouse__country-input-section">
                <p className="editWarehouse__country">Country</p>
                <input
                  className="editWarehouse__country-input"
                  name="country"
                  type="text"
                  placeholder="Country"
                  defaultValue={editWarehouse?.warehouseCountry}
                  ref={warehouseCountry}
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
                  name="contactName"
                  type="text"
                  placeholder="Name"
                  defaultValue={editWarehouse?.warehouseContactName}
                  ref={warehouseContactName}
                />
              </div>

              <div className="editWarehouse__contact-position-input-section">
                <p className="editWarehouse__contact-position">Position</p>
                <input
                  className="editWarehouse__contact-position-input"
                  name="position"
                  type="text"
                  placeholder="position"
                  defaultValue={editWarehouse?.warehouseContactPosition}
                  ref={warehouseContactPosition}
                />
              </div>

              <div className="editWarehouse__contact-number-input-section">
                <p className="editWarehouse__contact-number">Phone Number</p>
                <input
                  className="editWarehouse__contact-number-input"
                  name="phoneNumber"
                  type="text"
                  placeholder="Phone number"
                  defaultValue={editWarehouse?.warehousePhoneNumber}
                  ref={warehousePhoneNumber}
                />
              </div>

              <div className="editWarehouse__contact-email-input-section">
                <p className="editWarehouse__contact-email">Email</p>
                <input
                  className="editWarehouse__contact-email-input"
                  name="email"
                  type="text"
                  placeholder="Email"
                  defaultValue={editWarehouse?.warehouseEmail}
                  ref={warehouseEmail}
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
              <button type="submit" className="editWarehouse__save-btn">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
