import { useEffect, useState } from "react"
import "./warehouseDelete.scss";
import { Link, useParams } from "react-router-dom";

export default function WarehouseDelete() {
    const [warehouseDelete, setWarehouseDelete] = useState();
    const {warehouseId} = useParams();

    useEffect(()=> {
      async function fetchedWarehouseDelete() {
        const url = `https://instock-api-cj.onrender.com/api/warehouses/${warehouseId}`;
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
        setWarehouseDelete(data);
      }
      fetchedWarehouseDelete();
    },[])

    return (
        <div className="warehouseDelete">
            <div className="warehouseDelete__container">
            <div className="warehouseDelete__written-action-box">
                <Link
                 to={"/"}
                 className="warehouseDelete__cross-sign">✖️</Link>
                <div className="warehouseDelete__heading">
                    <h1 className="warehouseDelete__heading-text"> Delete {warehouseDelete?.warehouse_name} Warehouse?</h1>
                </div>
                <div className="warehouseDelete__paragraph">
                    <p  className="warehouseDelete__paragraph-text">Please confirm that you would like to delete the {warehouseDelete?.warehouse_name} warehouse from the list of the warehouses. You won't be able to undo this action.</p>
                </div>
            </div>
            <div className="warehouseDelete__buttons-container">
          <div className="warehouseDelete__cancel-btn-container">
            <Link 
            to={"/"}
            className="warehouseDelete__cancel-btn">
              Cancel
            </Link>
          </div>

          <div className="warehouseDelete__delete-btn-container">
            <button className="warehouseDelete__delete-btn">Save</button>
          </div>
        </div>
        </div>
        </div>
    )
}