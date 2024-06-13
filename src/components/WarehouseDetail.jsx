export default function WarehouseDetail() {
    return (
        <div className="inventory">
      <div className="inventory__item-details">
        <div className="inventory__heading-card">
          <h1 className="inventory__item-heading">
            {inventoryItemDetail?.item_name}
          </h1>
          <button className="inventory__item-edit">Edit</button>
        </div>
      </div>
        </div>
    )
}