import { useEffect, useState } from "react";
import "./editInventoryItem.scss";
import { useParams } from "react-router-dom";

export default function EditInventoryItem() {
  const [editInventoryItem, setEditInventoryItem] = useState();
  const {itemId} = useParams();

  useEffect(()=> {
    async function fetchedEditInventoryItem() {
      const url = `https://instock-api-cj.onrender.com/api/inventories/${itemId}`;
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setEditInventoryItem(data);
    }
    fetchedEditInventoryItem();
  },[itemId])

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
              <input
                className="editInventoryItem__category-input"
                type="text"
                placeholder="Select..."
                value={editInventoryItem?.country}
                onChange={(event) => {
                  console.log(event.target.value);
                  setEditInventoryItem((pureState) => {
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
              
              <div className="editInvnetory__Status-inputs">
              <input  
                className="editInventoryItem__status-input"
                type="checkbox"
                value={editInventoryItem?.contact_name}
                onChange={(event) => {
                  console.log(event.target.value);
                  setEditInventoryItem((pureState) => {
                    return {
                      ...pureState,
                      contact_name: event.target.value,
                    };
                  });
                }}
              />
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
                      quantity: event.target.value,
                    };
                  });
                }}
              />
            </div>

            <div className="editInventoryItem__warehouse-input-section">
              <p className="editInventoryItem__warehouse">Warehouse</p>
              <input
                className="editInventoryItem__warehouse-select-input"
                type="text"
                placeholder="Select..."
                value={editInventoryItem?.warehouse_name}
                onChange={(event) => {
                  console.log(event.target.value);
                  setEditInventoryItem((pureState) => {
                    return {
                      ...pureState,
                      warehouse_name: event.target.value,
                    };
                  });
                }}
              />
            </div>
          </div>
        </div>

        <div className="editInventoryItem__buttons-container">
          <div className="ediWarehouse__cancel-btn-container">
            <button className="editInventoryItem__cancel-btn">Cancel</button>
          </div>

          <div className="ediWarehouse__save-btn-container">
            <button className="editInventoryItem__save-btn">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
