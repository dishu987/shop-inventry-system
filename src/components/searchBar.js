import { useState } from "react";
import React from "react";

function SearchBar(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const buttonPressed = () => {
    props.updatesSearchParams({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });
  };
  const buttonPressed1 = () => {
    props.updatesSearchParams({
      name: "",
      price: 0,
      type: "",
      brand: "",
    });
  };
  return (
    <div>
      <form>
        <div className="form-group m-3 flex align-items-center justify-content-center overflow-auto">
          <label htmlFor="name-field" className="text-gray-900 h6">
            Name{" "}
          </label>{" "}
          <input
            className="focus:text-blue-900 p-1 m-3 text-gray-900 rounded-sm form-control"
            type="text"
            name="name-field"
            id="name-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <label htmlFor="price-field" className="text-gray-900 h6">
            Price{" "}
          </label>{" "}
          <input
            className="p-1 m-3 text-gray-900 rounded-sm form-control"
            type="number"
            name="price-field"
            id="price-field"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />{" "}
          <label htmlFor="type-field" className="text-gray-900 h6">
            Type{" "}
          </label>{" "}
          <input
            className="p-1 m-3 text-gray-900 rounded-sm form-control"
            type="text"
            name="type-field"
            id="type-field"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />{" "}
          <label htmlFor="brand-field" className="text-gray-900 h6">
            Brand{" "}
          </label>{" "}
          <input
            className="p-1 m-3 text-gray-900 rounded-sm form-control"
            type="text"
            name="brand-field"
            id="brand-field"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />{" "}
          <button
            type="button"
            className="px-3 py-1 rounded-md btn btn-primary w-50 mx-1"
            onClick={buttonPressed}
            style={{
              transition: "0.1s ease",
            }}
          >
            Search{" "}
          </button>{" "}
          <button
            type="button"
            className="px-3 py-1 mx-1 rounded-md btn-outline-danger btn w-50"
            onClick={buttonPressed1}
            style={{
              transition: "0.1s ease",
            }}
          >
            Reset{" "}
          </button>{" "}
        </div>{" "}
      </form>{" "}
    </div>
  );
}
export default SearchBar;
