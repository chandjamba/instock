import { useEffect, useState } from "react";
import "./inventory.scss";
import { Link } from "react-router-dom";
import { databases } from "../lib/appwrite";
import { Query } from "appwrite";

export default function Inventory() {
  const [inventories, setInventories] = useState();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    async function fetchedInventoriesData() {
      const page1 = await databases.listDocuments(
        import.meta.env.VITE_INSTOCK_DATABASE_ID,
        import.meta.env.VITE_INSTOCK_INVENTORIES_COLLECTION_ID,
        [
          Query.limit(25),
          Query.offset(0)
      ]
      );
      // page#2 for inventorioes. //
      const page2 = await databases.listDocuments(
        import.meta.env.VITE_INSTOCK_DATABASE_ID,
        import.meta.env.VITE_INSTOCK_INVENTORIES_COLLECTION_ID,
        [
          Query.limit(50),
          Query.offset(25)
      ]
      );
      // page#3 for inventorioes. //
      const page3 = await databases.listDocuments(
        import.meta.env.VITE_INSTOCK_DATABASE_ID,
        import.meta.env.VITE_INSTOCK_INVENTORIES_COLLECTION_ID,
        [
          Query.limit(50),
          Query.offset(75)
      ]
      );
      const page1Data = page1.documents;
      const page2Data = page2.documents;
      const page3Data = page3.documents;

      console.log([...page1Data, ...page2Data, ...page3Data]);
      setInventories([...page1Data, ...page2Data, ...page3Data]);
    }
    fetchedInventoriesData();
  }, []);

  async function handleSearchButton() {
    const searchParam = new URLSearchParams({ s: searchValue }).toString();
    console.log(searchValue);
    console.log(searchParam);
    const url = `https://instock-api-cj.onrender.com/api/inventories?${searchParam}`;
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    setInventories(data);
  }

  return (
    <div className="inventories">
      <div className="inventory">
        <div className="inventory__main-heading-and-input-section">
          <h1 className="inventory__main-heading">Inventory</h1>
          <div className="inventory__input-section">
            <input
              className="inventory__input"
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={(event) => {
                console.log(event.target.value);
                setSearchValue(event.target.value);
              }}
            />
            <button
              onClick={handleSearchButton}
              className="inventory__search-btn"
            >
              🔎
            </button>
          </div>
          <Link
            to={"/inventory/addInventoryItem"}
            className="inventory__add-btn"
          >
            {" "}
            + Add New Item
          </Link>
        </div>
        <div className="inventories__list" key={inventories?.id}>
          {inventories?.map((inventory) => {
            return (
              <div className="inventory-card1" key={inventories.id}>
                <div className="inventory__info">
                  <div className="inventory__info-box1">
                    <p className="inventory__heading">INVENTORY</p>
                    <Link
                      to={`/inventory/${inventory?.$id}`}
                      className="inventory__item-name"
                    >
                      {inventory?.itemName}
                    </Link>
                    <p className="inventory__category-heading">CATEGORY</p>
                    <div className="inventory__category">
                      {inventory?.categories?.categoryName}
                    </div>
                    <p className="inventory__itemnumber-heading">ITEM NUMBER</p>
                    <div className="inventory__item-no">{inventory?.$id}</div>
                  </div>
                  <div className="inventory__info-box2">
                    <p className="inventory__status-heading">STATUS</p>
                    <div className="inventory__status">
                      {inventory?.itemStatus}
                    </div>
                    <p className="inventory__quantity-heading">QTY</p>
                    <div className="inventory__quantity">
                      {inventory?.itemQuantity}
                    </div>
                    <p className="inventory__heading">WAREHOUSE</p>
                    <Link
                      to={`/warehouse/${inventory?.warehouses?.warehouseName}`}
                      className="inventory__location"
                    >
                      {inventory?.warehouses?.warehouseCity}
                    </Link>
                  </div>
                </div>
                <div className="inventory__card-btn">
                  <Link
                    to={`/inventory/${inventory?.$id}/delete`}
                    className="inventory-delete"
                  >
                    Delete
                  </Link>
                  <Link
                    to={`/inventory/${inventory?.$id}/edit`}
                    className="inventory-edit"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
