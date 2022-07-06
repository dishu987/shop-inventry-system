import React from "react";
function ItemDisplay({ items, deleteItem }) {
  return (
    <div className="p-3 text-gray-1600 overflow-auto">
      <table className="table table-bordered table-hover table-responsive-sm table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Sr. No.</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Type</th>
            <th scope="col">Brand</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.type}</td>
                <td>{item.brand}</td>
                <td className="w-10">
                  <button
                    className="btn btn-outline-danger"
                    style={{
                      transition: "0.1s ease",
                    }}
                    onClick={() => deleteItem(item)}
                  >
                    <i className="fa fa-trash"></i> Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ItemDisplay;
