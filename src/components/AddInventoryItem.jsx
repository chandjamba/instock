import { useEffect, useState } from "react";
import "./addInventoryItem.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddInventoryItem() {
  const [addInventoryItem, setAddInventoryItem] = useState();
  const [warehousesList, setWarehousesList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchedWarehouseId() {
      const url = "https://instock-api-cj.onrender.com/api/warehouses";
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setWarehousesList(data);
    }

    fetchedWarehouseId();
  }, []);

  async function createInventoryItem() {
    const url = "https://instock-api-cj.onrender.com/api/inventories";
    const resp = await axios.post(url, addInventoryItem);
    navigate(`/inventory/${resp.data.id}`);
    console.log(resp, "parsedData");
  }

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
                value={addInventoryItem?.item_name}
                onChange={(event) => {
                  // console.log(event.target.value);
                  // setAddInventoryItemItem({
                  //   ...addInventoryItem,
                  //   warehouse_name: event.target.value,
                  // });
                  setAddInventoryItem((pureState) => {
                    return {
                      ...pureState,
                      item_name: event.target.value,
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
                value={addInventoryItem?.description}
                onChange={(event) => {
                  console.log(event.target.value);

                  setAddInventoryItem((pureState) => {
                    return {
                      ...pureState,
                      description: event.target.value,
                    };
                  });
                }}
              ></textarea>
            </div>

            <div className="addInventoryItem__category-input-section">
              <p className="addInventoryItem__category">Category</p>
              <select
                className="addInventoryItem__category-input"
                value={addInventoryItem?.category}
                placeholder="Select"
                onChange={(event) => {
                  console.log(event.target.value);
                  setAddInventoryItem((pureState) => {
                    return {
                      ...pureState,
                      category: event.target.value,
                    };
                  });
                }}
              >
                <option>Electronics</option>
                <option>Apparel</option>
                <option>Gear</option>
                <option>Accessories</option>
                <option>Health</option>
              </select>
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
                    onChange={() =>
                      setAddInventoryItem((pureState) => {
                        return {
                          ...pureState,
                          status: "In Stock",
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
                    onChange={() =>
                      setAddInventoryItem((pureState) => {
                        return {
                          ...pureState,
                          status: "Out of Stock",
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
                value={addInventoryItem?.quantity}
                onChange={(event) => {
                  console.log(event.target.value);
                  setAddInventoryItem((pureState) => {
                    return {
                      ...pureState,
                      quantity: parseInt(event.target.value),
                    };
                  });
                }}
              />
            </div>

            <div className="addInventoryItem__warehouse-input-section">
              <p className="addInventoryItem__warehouse">Warehouse</p>
              <select
                className="addInventoryItem__warehouse-select-input"
                placeholder="Select"
                value={addInventoryItem?.warehouse_id}
                onChange={(event) => {
                  console.log(event.target.value);
                  setAddInventoryItem((pureState) => {
                    return {
                      ...pureState,
                      warehouse_id: event.target.value,
                    };
                  });
                }}
              >
                {warehousesList.map((warehouse) => {
                  return (
                    <option value={warehouse?.id} key={warehouse?.id}>
                      {warehouse?.warehouse_name}
                    </option>
                  );
                })}
              </select>
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
            <button
              onClick={createInventoryItem}
              className="addInventoryItem__save-btn"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
