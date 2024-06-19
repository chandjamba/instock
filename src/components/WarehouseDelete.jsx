import { useState } from "react"
import "./warehouseDelete.scss";

export default function WarehouseDelete() {
    const [warehouseDelete, setWarehouseDelete] = useState();
    return (
        <div className="warehouseDelete">
            <div className="warehouseDelete__container">
            <div className="warehouseDelete__written-action-box">
                <div className="warehouseDelete__cross-sign">✖️</div>
                <div className="warehouseDelete__heading">
                    <h1 className="warehouseDelete__heading-text"> Delete Washington Warehouse?</h1>
                </div>
                <div className="warehouseDelete__paragraph">
                    <p className="warehouseDelete__paragraph-text">Please confirm that you waould like to delete the washington warehouse from the list of the warehouses. You won't be able to undo this action.</p>
                </div>
            </div>
            <div className="warehouseDelete__buttons-container">
          <div className="warehouseDelete__cancel-btn-container">
            <button className="warehouseDelete__cancel-btn">
              Cancel
            </button>
          </div>

          <div className="warehouseDelete__delete-btn-container">
            <button className="warehouseDelete__delete-btn">Save</button>
          </div>
        </div>
        </div>
        </div>
    )
}