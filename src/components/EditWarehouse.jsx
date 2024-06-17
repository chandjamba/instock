import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function EditWarehouse() {
  const [editWarehouse, setEditWarehouse] = useState();
  const { warehouseId } = useParams();

  useEffect(() => {
    async function fetchedEditWarehouse() {
      const url = `https://instock-api-cj.onrender.com/api/warehouses/${warehouseId}`;
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setEditWarehouse(data);
    }
    fetchedEditWarehouse();
  }, [warehouseId]);
  return (
    <div className="editWarehouses">
      <div className="warehouse">
        <div className="warehouse__heading-card">
                  <h1 className="warehouse__main-heading"> ⬅ Edit Warehouse</h1>
                  
        </div>
      </div>
    </div>
  );
}
