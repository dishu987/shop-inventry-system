import "./App.css";
import Navbar from "./components/navbar";
import SearchBar from "./components/searchBar";
import { useState, useEffect } from "react";
import AddItems from "./components/addItems";
import ItemDisplay from "./components/ItemDisplay";
import React from "react";
function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });
  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };
  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((response) => response.json())
      .then((data) => setData({ items: data }));
  }, [data, filters]);
  const deleteItem = (item) => {
    const items = data["items"];
    const requestOptions = {
      method: "DELETE",
    };
    fetch(`http://localhost:3000/items/${item.id}`, requestOptions).then(
      (response) => {
        if (response.ok) {
          const idx = items.indexOf(item);
          items.splice(idx, 1);
          setData({ items: items });
        }
      }
    );
  };
  const addItemToData = (item) => {
    let items = data["items"];
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    };
    fetch("http://localhost:3000/items", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then((data) => {
        items.push(item);
        setData({ items: items });
      });
  };
  const filterData = (data) => {
    const filteredData = [];
    if (!filters.name) {
      return data;
    }
    for (const item of data) {
      if (item.name !== filters.name && filters.name !== "") {
        continue;
      }
      if (item.price !== filters.price && filters.name < item.price) {
        continue;
      }
      if (item.type !== filters.type && filters.type !== "") {
        continue;
      }
      if (item.brand !== filters.brand && filters.brand !== "") {
        continue;
      }
      filteredData.push(item);
    }
    return filteredData;
  };
  return (
    <div className="App">
      <div className="flex-wrap flex justify-content-center align-items-center">
        <div
          className="m-3 p-3 w-100 bg-blue-400 hover:bg-blue-600 rounded-md"
          style={{
            transition: "ease",
            transitionDuration: "0.3s",
          }}
        >
          <Navbar text="Shop Invantery System" />
        </div>{" "}
        <div className="p-3 m-3 bg-blue-100 w-100 rounded-md">
          <div className="p-3 h2 text-center w-100"> Search an Item </div>{" "}
          <SearchBar updatesSearchParams={updateFilters} />{" "}
        </div>{" "}
        <div className="bg-blue-100 m-3 text-white w-100 rounded-md">
          <ItemDisplay
            deleteItem={deleteItem}
            items={filterData(data["items"])}
          />{" "}
        </div>{" "}
        <div className="p-3 m-3 w-100 bg-blue-100 rounded-md">
          <div className="p-3 h2 text-center w-100"> Add an Item </div>{" "}
          <AddItems addItem={addItemToData} />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
