import { useEffect, useState } from "react";
import "./warehouseDelete.scss";
import { Link, useParams } from "react-router-dom";
import { databases } from "../lib/appwrite";

export default function WarehouseDelete() {
  const [warehouseDelete, setWarehouseDelete] = useState();
  const { warehouseId } = useParams();

  // useEffect(() => {
  //   async function fetchWarehouseDelete() {
  //     const resp = await databases.getDocument(
  //       import.meta.env.VITE_INSTOCK_DATABASE_ID,
  //       import.meta.env.VITE_INSTOCK_WAREHOUSES_COLLECTION_ID,
  //       warehouseId
  //     );
  //     const data = resp;
  //     console.log(data);
  //     setWarehouseDelete(data, "warehouseData to Delete");
  //   }
  //   fetchWarehouseDelete();
  // }, [warehouseId]);

  async function deleteWarehouseButtonHandler() {
    const resp = await databases.deleteDocument(
      import.meta.env.VITE_INSTOCK_DATABASE_ID,
      import.meta.env.VITE_INSTOCK_WAREHOUSES_COLLECTION_ID,
      warehouseId
    );
    console.log(resp, "warehouse Deleted");
  }
  // console.log(warehouseId, "warehouseId");
  return (
    <div className="warehouseDelete">
      <div className="warehouseDelete__container">
        <div className="warehouseDelete__written-action-box">
          <Link to={"/"} className="warehouseDelete__cross-sign">
            ✖️
          </Link>
          <div className="warehouseDelete__heading">
            <h1 className="warehouseDelete__heading-text">
              {" "}
              Delete {warehouseDelete?.warehouse_name} Warehouse?
            </h1>
          </div>
          <div className="warehouseDelete__paragraph">
            <p className="warehouseDelete__paragraph-text">
              Please confirm that you would like to delete the{" "}
              {warehouseDelete?.warehouse_name} warehouse from the list of the
              warehouses. You wont be able to undo this action.
            </p>
          </div>
        </div>
        <div className="warehouseDelete__buttons-container">
          <div className="warehouseDelete__cancel-btn-container">
            <Link to={"/"} className="warehouseDelete__cancel-btn">
              Cancel
            </Link>
          </div>

          <div className="warehouseDelete__delete-btn-container">
            <button
              className="warehouseDelete__delete-btn"
              onClick={deleteWarehouseButtonHandler}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
