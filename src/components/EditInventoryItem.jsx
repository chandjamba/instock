import { useEffect, useState } from "react";
import "./editInventoryItem.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EditInventoryItem() {
  const [editInventoryItem, setEditInventoryItem] = useState();
  const navigate = useNavigate();
  const { itemId } = useParams();

  useEffect(() => {
    async function fetchedEditInventoryItem() {
      const url = `https://instock-api-cj.onrender.com/api/inventories/${itemId}`;
      const resp = await fetch(url);
      const data = await resp.json();
      setEditInventoryItem(data);
    }
    fetchedEditInventoryItem();
  }, [itemId]);

  console.log(editInventoryItem);

  async function saveEditInventoryItem() {
    const url = "https://instock-api-cj.onrender.com/api/inventories";
    const resp = await axios.post(url, editInventoryItem);
    const data = resp;
    navigate(`/inventory/${resp.data.id}`);
    console.log(data, "parsedData");
  }

  return (
    <div className="editInventoryItems">
      <div className="editInventoryItem">
        <div className="editInventoryItem__heading-card">
          <h1 className="editInventoryItem__main-heading">
            {" "}
            Edit Inventory Item
          </h1>
        </div>
        <div className="editInventoryItem__details">
          <div className="editInventoryItem__details-heading">
            <h1 className="editInventoryItem__details-heading-text">
              {" "}
              Item Details
            </h1>
          </div>
          <div className="editInventoryItem__details-input-section">
            <div className="editInventoryItem__name-input-section">
              <div className="editInventoryItem__name">Item Name</div>
              <input
                className="editInventoryItem__name-input"
                type="text"
                placeholder="Item name..."
                value={editInventoryItem?.item_name}
                onChange={(event) => {
                  // console.log(event.target.value);
                  // setEditInventoryItemItem({
                  //   ...editInventoryItem,
                  //   warehouse_name: event.target.value,
                  // });
                  setEditInventoryItem((pureState) => {
                    return {
                      ...pureState,
                      item_name: event.target.value,
                    };
                  });
                }}
              />
            </div>

            <div className="editInventoryItem__description-input-section">
              <p className="editInventoryItem__description">Description</p>
              <textarea
                className="editInventoryItem__description-input"
                type="text"
                placeholder="Description..."
                rows={5}
                value={editInventoryItem?.description}
                onChange={(event) => {
                  console.log(event.target.value);

                  setEditInventoryItem((pureState) => {
                    return {
                      ...pureState,
                      description: event.target.value,
                    };
                  });
                }}
              ></textarea>
            </div>

            <div className="editInventoryItem__category-input-section">
              <p className="editInventoryItem__category">Category</p>
              <select
                className="editInventoryItem__category-input"
                value={editInventoryItem?.category}
                placeholder="Select"
                onChange={(event) => {
                  console.log(event.target.value);
                  setEditInventoryItem((pureState) => {
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

        <div className="editInventoryItem__availability-details">
          <div className="editInventoryItem__availability-details-heading">
            <h1 className="editInventoryItem__availability-details-heading-text">
              {" "}
              Item Availability
            </h1>
          </div>
          <div className="editInventoryItem__availability-input-section">
            <div className="editInventoryItem__status-input-section">
              <div className="editInventoryItem__status">Status</div>

              <div className="editInventoryItem__status-inputs">
                <label htmlFor="In_Stock">
                  <input
                    id="In_Stock"
                    type="radio"
                    name="status"
                    value={"In Stock"}
                    checked={editInventoryItem?.status == "In Stock"}
                    onChange={(e) =>
                      setEditInventoryItem((pureState) => {
                        return {
                          ...pureState,
                          status: e.target.value,
                        };
                      })
                    }
                  />
                  In Stock
                </label>

                <label htmlFor="Out_of_Stock">
                  <input
                    id="Out_of_Stock"
                    type="radio"
                    name="status"
                    value={"Out of Stock"}
                    checked={editInventoryItem?.status == "Out of Stock"}
                    onChange={(e) =>
                      setEditInventoryItem((pureState) => {
                        return {
                          ...pureState,
                          status: e.target.value,
                        };
                      })
                    }
                  />
                  Out of Stock
                </label>
              </div>
            </div>

            <div className="editInventoryItem__quantity-input-section">
              <div className="editInventoryItem__quantity">Quantity</div>

              <input
                className="editInventoryItem__quantity-input"
                type="text"
                placeholder="Quantity..."
                value={editInventoryItem?.quantity}
                onChange={(event) => {
                  console.log(event.target.value);
                  setEditInventoryItem((pureState) => {
                    return {
                      ...pureState,
                      quantity: parseInt(event.target.value),
                    };
                  });
                }}
              />
            </div>

            <div className="editInventoryItem__warehouse-input-section">
              <p className="editInventoryItem__warehouse">Warehouse</p>
              <select
                className="editInventoryItem__warehouse-input"
                value={editInventoryItem?.warehouse_name}
                placeholder="Select"
                onChange={(event) => {
                  console.log(event.target.value);
                  setEditInventoryItem((pureState) => {
                    return {
                      ...pureState,
                      warehouse_name: event.target.value,
                    };
                  });
                }}
              >
                <option>Boston</option>
                <option>Jersey</option>
                <option>Manhattan</option>
                <option>Miami</option>
                <option>San Francisco</option>
                <option>Santa Monica</option>
                <option>Seattle</option>
                <option>Washington</option>
              </select>
            </div>
          </div>
        </div>

        <div className="editInventoryItem__buttons-container">
          <div className="editInventoryItem__cancel-btn-container">
            <Link to={"/inventory/"} className="editInventoryItem__cancel-btn">
              Cancel
            </Link>
          </div>

          <div className="editInventoryItem__save-btn-container">
            <button
              onClick={saveEditInventoryItem}
              className="editInventoryItem__save-btn"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
