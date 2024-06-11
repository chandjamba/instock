import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function InventoryItemDetail() {
  const [inventoryItemDetail, setInventoryItemDetail] = useState();
  const { itemId } = useParams();

  useEffect(() => {
    async function fetchedInventoryItemData() {
      const url = `https://instock-api-cj.onrender.com/api/inventories/${itemId}`;
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setInventoryItemDetail(data);
    }
    fetchedInventoryItemData();
  }, [itemId]);
  return (
    <div className="inventory">
      <div className="inventory__item-details">
        <div className="heading__editBtn-container">
          <h1 className="inventory__item-heading">
            {inventoryItemDetail?.item_name}
          </h1>
          <button className="inventory__item-edit">Edit</button>
        </div>
      </div>
    </div>
  );
}
