import { useEffect, useState } from "react";
import "./addInventoryItem.scss";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { databases, ID } from "../lib/appwrite";

async function fetchCategoriesData() {
  const resp = await databases.listDocuments(
    import.meta.env.VITE_INSTOCK_DATABASE_ID,
    import.meta.env.VITE_INSTOCK_CATEGORIES_COLLECTION_ID
  );
  const data = resp.documents;
  console.log(data, "categoriesData");
  return data;
}
async function fetchWarehousesData() {
  const resp = await databases.listDocuments(
    import.meta.env.VITE_INSTOCK_DATABASE_ID,
    import.meta.env.VITE_INSTOCK_WAREHOUSES_COLLECTION_ID
  );
  const data = resp.documents;
  console.log(data, "warehouseData");
  return data;
}

async function fetchInventoriesData() {
  const resp = await databases.listDocuments(
    import.meta.env.VITE_INSTOCK_DATABASE_ID,
    import.meta.env.VITE_INSTOCK_INVENTORIES_COLLECTION_ID
  );
  const data = resp.documents;
  console.log(data, "InventoriesData");
  return data;
}

export default function AddInventoryItem() {
  const [inventories, setInventories] = useState([]);
  const [warehousesList, setWarehousesList] = useState([]);
  const [categories, setCategories] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    async function fetchWarehouseAndCategoriesAndInventoriesData() {
      const [fetchedInventoriesData, fetchedWarehousesData, fetchedCategoriesData] = await Promise.all([
        fetchCategoriesData(),
        fetchWarehousesData(),
        fetchInventoriesData(),
      ]);
      setInventories(fetchedInventoriesData);
      console.log(fetchedInventoriesData, "inventoriesData");
      setWarehousesList(fetchedWarehousesData);
      console.log(fetchedWarehousesData, "warehouseData");
      setCategories(fetchedCategoriesData);
      console.log(fetchedCategoriesData, "categoriesData")
    }
    fetchWarehouseAndCategoriesAndInventoriesData();
  }, []);

  const submitButtonHandler = async (event) => {
    event.preventDefault();
    try {
      await databases.createDocument(
        import.meta.env.VITE_INSTOCK_DATABASE_ID,
        import.meta.env.VITE_INSTOCK_INVENTORIES_COLLECTION_ID,
        ID.unique(),
        {
          itemName: event.target.name.value,
          itemDescription: event.target.description.value,
          itemStatus: event.target.itemStatus.value,
          itemQuantity: event.target.quantity.value,
          itemCategory: event.target.category.value,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="addInventoryItems__main-form"
      onSubmit={submitButtonHandler}
    >
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
                  name="name"
                  type="text"
                  placeholder="Item name..."
                />
              </div>

              <div className="addInventoryItem__description-input-section">
                <p className="addInventoryItem__description">Description</p>
                <textarea
                  className="addInventoryItem__description-input"
                  name="description"
                  type="text"
                  placeholder="Description..."
                  rows={5}
                ></textarea>
              </div>

              <div className="addInventoryItem__category-input-section">
                <p className="addInventoryItem__category">Category</p>
                <select
                  className="addInventoryItem__category-input"
                  name="category"
                  placeholder="Select"
                >
                  {inventories.map((inventory) => {
                    return (
                      <option key={inventory?.$id} value={inventory?.$id}>
                        {inventory?.categoryName}
                      </option>
                    );
                  })}
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
                  <label>
                    <input type="radio" name="itemStatus"  />
                    <p>In Stock</p>
                  </label>

                  <label>
                    <input type="radio" name="itemStatus"  />
                    <p>Out of Stock</p>
                  </label>
                </div>
              </div>

              <div className="addInventoryItem__quantity-input-section">
                <div className="addInventoryItem__quantity">Quantity</div>

                <input
                  className="addInventoryItem__quantity-input"
                  name="quantity"
                  type="text"
                  placeholder="Quantity..."
                />
              </div>

              <div className="addInventoryItem__warehouse-input-section">
                <p className="addInventoryItem__warehouse">Warehouse</p>
                <select
                  className="addInventoryItem__warehouse-select-input"
                  name="warehouseName"
                  placeholder="Select"
                >
                  {warehousesList.map((warehouse) => {
                    return (
                      <option value={warehouse?.$id} key={warehouse?.$id}>
                        {warehouse?.warehouseName}
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
              <button type="submit" className="addInventoryItem__save-btn">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
