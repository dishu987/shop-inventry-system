import { useState } from "react";
import React from "react";
function AddItems(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const addItembuttonPressed = () => {
    if (name === "" || price === 0 || type === "" || brand === "") {
      alert("All Fields are required.");
    } else {
      props.addItem({
        name: name,
        price: price,
        type: type,
        brand: brand,
      });
      setBrand("");
      setPrice(0);
      setName("");
      setType("");
      alert("Added Successfuly...");
    }
  };
  return (
    <div className="p-3 m-3">
      <form>
        <div className="form-group m-3">
          <label htmlFor="name-field"> Name: </label>
          <input
            className="form-control"
            type="text"
            name="name-field"
            id="name-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group m-3">
          <label htmlFor="price-field"> Price: </label>
          <input
            className="form-control"
            type="number"
            name="price-field"
            id="price-field"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="form-group m-3">
          <label htmlFor="type-field"> Type: </label>
          <input
            className="form-control"
            type="text"
            name="type-field"
            id="type-field"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div className="form-group m-3">
          <label htmlFor="brand-field"> Brand : </label>
          <input
            className="form-control"
            type="text"
            name="brand-field"
            id="brand-field"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
        <div className="col-sm-12 flex justify-content-center align-items-center my-3 form group">
          <button
            type="button"
            className="rounded-md bg-blue-500 hover:bg-blue-600 h-16 w-100"
            onClick={addItembuttonPressed}
            style={{
              transition: "0.1s ease",
            }}
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddItems;
