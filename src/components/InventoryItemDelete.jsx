import { Link, useParams } from "react-router-dom"
import "./inventoryItemDelete.scss";
import { useEffect, useState } from "react";

export default function InventoryItemDelete() {
    const [inventoryItemDelete, setInventoryItemDelete] = useState();
    const {itemId} = useParams();

    useEffect(()=> {
        async function fetchedInventoryItemDelete() {
            const url = `https://instock-api-cj.onrender.com/api/inventories/${itemId}`;
            const resp = await fetch(url);
            const data = await resp.json();
            console.log(data);
            setInventoryItemDelete(data);
        }
        fetchedInventoryItemDelete();
    },[itemId]);

    return (
        <div className="inventoryItemDelete">
            <div className="inventoryItemDelete__container">
            <div className="inventoryItemDelete__written-action-box">
                <Link 
                to={"/inventory/"}
                className="inventoryItemDelete__cross-sign">✖️</Link>
                <div className="inventoryItemDelete__heading">
                    <h1 className="inventoryItemDelete__heading-text"> Delete {inventoryItemDelete?.item_name} inventory item?</h1>
                </div>
                <div className="inventoryItemDelete__paragraph">
                    <p className="inventoryItemDelete__paragraph-text">Please confirm that you would like to delete the {inventoryItemDelete?.item_name} from Inventory list. You won't be able to undo this action.</p>
                </div>
            </div>
            <div className="inventoryItemDelete__buttons-container">
          <div className="inventoryItemDelete__cancel-btn-container">
            <Link 
            to={"/inventory/"}
            className="inventoryItemDelete__cancel-btn">
              Cancel
            </Link>
          </div>

          <div className="inventoryItemDelete__delete-btn-container">
            <button className="inventoryItemDelete__delete-btn">Save</button>
          </div>
        </div>
        </div>
        </div>
    )
}