import { useState } from "react";
import "./addInventoryItem.scss";
import { Link } from "react-router-dom";

export default function AddInventoryItem() {
  const [addInventoryItem, setAddInventoryItem] = useState();

  return (
    <div className="addInventoryItems">
      <div className="addInventoryItem">
        <div className="addInventoryItem__heading-card">
          <h1 className="addInventoryItem__main-heading">
            {" "}
            Add New Inventory Item
          </h1>
        </div>
        <div className="addInventoryItem__details">
          <div className="addInventoryItem__details-heading">
            <h1 className="addInventoryItem__details-heading-text">
              {" "}
              Item Details
            </h1>
          </div>
          <div className="addInventoryItem__details-input-section">
            <div className="addInventoryItem__name-input-section">
              <div className="addInventoryItem__name">Item Name</div>
              <input
                className="addInventoryItem__name-input"
                type="text"
                placeholder="Item name..."
                value={addInventoryItem?.warehouse_name}
                onChange={(event) => {
                  // console.log(event.target.value);
                  // setAddInventoryItemItem({
                  //   ...addInventoryItem,
                  //   warehouse_name: event.target.value,
                  // });
                  setAddInventoryItem((pureState) => {
                    return {
                      ...pureState,
                      warehouse_name: event.target.value,
                    };
                  });
                }}
              />
            </div>

            <div className="addInventoryItem__description-input-section">
              <p className="addInventoryItem__description">Description</p>
              <textarea
                className="addInventoryItem__description-input"
                type="text"
                placeholder="Description..."
                rows={5}
                value={addInventoryItem?.address}
                onChange={(event) => {
                  console.log(event.target.value);

                  setAddInventoryItem((pureState) => {
                    return {
                      ...pureState,
                      address: event.target.value,
                    };
                  });
                }}
              ></textarea>
            </div>

            <div className="addInventoryItem__category-input-section">
              <p className="addInventoryItem__category">Category</p>
              <Select categoryOptions={categoryOptions} />
            </div>
          </div>
        </div>

        <div className="addInventoryItem__availability-details">
          <div className="addInventoryItem__availability-details-heading">
            <h1 className="addInventoryItem__availability-details-heading-text">
              {" "}
              Item Availability
            </h1>
          </div>
          <div className="addInventoryItem__availability-input-section">
            <div className="addInventoryItem__status-input-section">
              <div className="addInventoryItem__status">Status</div>

              <div className="addInventoryItem__status-inputs">
                <label htmlFor="In Stock">
                  <input
                    id="In Stock"
                    type="radio"
                    name="status"
                    value={addInventoryItem?.status}
                    onChange={(e) =>
                      setAddInventoryItem((pureState) => {
                        return {
                          ...pureState,
                          status: e.target.value,
                        };
                      })
                    }
                  />
                  <p>In Stock</p>
                </label>

                <label htmlFor="Out of Stock">
                  <input
                    id="Out of Stock"
                    type="radio"
                    name="status"
                    value={addInventoryItem?.inventoryStatus}
                    onChange={(e) =>
                      setAddInventoryItem((pureState) => {
                        return {
                          ...pureState,
                          status: e.target.value,
                        };
                      })
                    }
                  />
                  <p>Out of Stock</p>
                </label>
              </div>
            </div>

            <div className="addInventoryItem__quantity-input-section">
              <div className="addInventoryItem__quantity">Quantity</div>

              <input
                className="addInventoryItem__quantity-input"
                type="text"
                placeholder="Quantity..."
                value={addInventoryItem?.contact_name}
                onChange={(event) => {
                  console.log(event.target.value);
                  setAddInventoryItem((pureState) => {
                    return {
                      ...pureState,
                      contact_name: event.target.value,
                    };
                  });
                }}
              />
            </div>

            <div className="addInventoryItem__warehouse-input-section">
              <p className="addInventoryItem__warehouse">Warehouse</p>
              <input
                className="addInventoryItem__warehouse-select-input"
                type="text"
                placeholder="Select..."
                value={addInventoryItem?.contact_position}
                onChange={(event) => {
                  console.log(event.target.value);
                  setAddInventoryItem((pureState) => {
                    return {
                      ...pureState,
                      contact_position: event.target.value,
                    };
                  });
                }}
              />
            </div>
          </div>
        </div>

        <div className="addInventoryItem__buttons-container">
          <div className="addInventoryItem__cancel-btn-container">
            <Link to={"/inventory/"} className="addInventoryItem__cancel-btn">
              Cancel
            </Link>
          </div>

          <div className="addInventoryItem__save-btn-container">
            <button className="addInventoryItem__save-btn">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
