import { useEffect, useRef, useState } from "react";
import "./editInventoryItem.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ID } from "appwrite";
import { databases } from "../lib/appwrite";

async function fetchWarehousesData() {
  const resp = await databases.listDocuments(
    import.meta.env.VITE_INSTOCK_DATABASE_ID,
    import.meta.env.VITE_INSTOCK_WAREHOUSES_COLLECTION_ID
  );
  const data = resp.documents;
  return data;
}

async function fetchCategoriesData() {
  const resp = await databases.listDocuments(
    import.meta.env.VITE_INSTOCK_DATABASE_ID,
    import.meta.env.VITE_INSTOCK_CATEGORIES_COLLECTION_ID
  );
  const data = resp.documents;
  return data;
}
async function fetchEditInventoryItem(itemId) {
  const resp = await databases.getDocument(
    import.meta.env.VITE_INSTOCK_DATABASE_ID,
    import.meta.env.VITE_INSTOCK_INVENTORIES_COLLECTION_ID,
    itemId
  );
  const data = resp;
  return data;
}

export default function EditInventoryItem() {
  const [editInventoryItem, setEditInventoryItem] = useState();
  const [warehousesList, setWarehousesList] = useState();
  const [categoriesList, setCategoriesList] = useState();
  // const navigate = useNavigate();
  const { itemId } = useParams();
  const itemName = useRef();
  const itemDescription = useRef();
  const itemStatus = useRef();
  const itemQuantity = useRef();
  const categories = useRef();
  const warehouses = useRef();

  useEffect(() => {
    async function fetchWarehouseAndInventoriesData() {
      const [
        fetchedEditInventoryItem,
        fetchedWarehousesData,
        fetchedCategoriesData,
      ] = await Promise.all([
        fetchEditInventoryItem(itemId),
        fetchWarehousesData(),
        fetchCategoriesData(),
      ]);
      setCategoriesList(fetchedCategoriesData);
      console.log(fetchedCategoriesData, "categoriesData");
      setWarehousesList(fetchedWarehousesData);
      console.log(fetchedWarehousesData, "warehouseData");
      setEditInventoryItem(fetchedEditInventoryItem);
      console.log(fetchedEditInventoryItem, "fetchedEditInventoryItem");
    }
    fetchWarehouseAndInventoriesData();
  }, [itemId]);

  const saveButtonHandler = async (event) => {
    event.preventDefault();
    const resp = await databases.updateDocument(
      import.meta.env.VITE_INSTOCK_DATABASE_ID,
      import.meta.env.VITE_INSTOCK_INVENTORIES_COLLECTION_ID,
      editInventoryItem?.$id,
      {
        itemName: event.target.name.value,
        itemDescription: event.target.description.value,
        itemStatus: event.target.itemStatus.value,
        itemQuantity: parseInt(event.target.quantity.value),
        categories: event.target.category.value,
        warehouses: event.target.warehouse.value,
      }
    );
    const data = resp;
    console.log(data, "parsedData");
  };

  return (
    <form className="editInventory__main-form" onSubmit={saveButtonHandler}>
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
                  defaultValue={editInventoryItem?.itemName}
                  ref={itemName}
                />
              </div>

              <div className="editInventoryItem__description-input-section">
                <p className="editInventoryItem__description">Description</p>
                <textarea
                  className="editInventoryItem__description-input"
                  type="text"
                  placeholder="Description..."
                  rows={5}
                  defaultValue={editInventoryItem?.itemDescription}
                  ref={itemDescription}
                ></textarea>
              </div>

              <div className="editInventoryItem__category-input-section">
                <p className="editInventoryItem__category">Category</p>
                <select
                  className="editInventoryItem__category-input"
                  placeholder="Select"
                  defaultValue={editInventoryItem?.categories?.categoryName}
                  ref={categories}
                >
                  {categoriesList?.map((categories) => {
                    <option key={categories?.$id} value={categories?.$id}>
                      {categories?.categoryName}
                    </option>;
                  })}
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
                      defaultValue={editInventoryItem?.itemStatus}
                      ref={itemStatus}
                    />
                    In Stock
                  </label>

                  <label htmlFor="Out_of_Stock">
                    <input
                      id="Out_of_Stock"
                      type="radio"
                      name="status"
                      defaultValue={editInventoryItem?.itemStatus}
                      ref={itemStatus}
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
                  defaultValue={editInventoryItem?.itemQuantity}
                  ref={itemQuantity}
                />
              </div>

              <div className="editInventoryItem__warehouse-input-section">
                <p className="editInventoryItem__warehouse">Warehouse</p>
                <select
                  className="editInventoryItem__warehouse-input"
                  value={editInventoryItem?.warehouses?.warehouseName}
                  placeholder="Select"
                  defaultValue={editInventoryItem?.warehouses?.$id}
                  ref={warehouses}
                >
                  {warehousesList?.map((warehouse) => {
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

          <div className="editInventoryItem__buttons-container">
            <div className="editInventoryItem__cancel-btn-container">
              <Link
                to={"/inventory/"}
                className="editInventoryItem__cancel-btn"
              >
                Cancel
              </Link>
            </div>

            <div className="editInventoryItem__save-btn-container">
              <button type="submit" className="editInventoryItem__save-btn">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
