import React, { useState } from "react";
import Toasts from "./Toasts";
import { DATA } from "../constant";
import Cart from "./Cart";
import CardItem from "./CardItem";
import DropdownMenu from "./Dropdown";
import Button from 'react-bootstrap/Button';
import { FILTER_DROPDOWN, SORT_DROPDOWN } from "../constant";

function MainContainer() {
  const [items, addItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([...DATA]);
  const [total, setTotal] = useState(0);
  const [toastsList, setToastsList] = useState([]);

  const handleAdd = (item) => {
    setToastsList((prev) => [...prev, item.title]);

    setTotal((prevTotal) => Number(prevTotal) + item.price);
    const isExist = items.find((it) => it.id === item.id);

    if (isExist) {
      const updatedItem = items.map((i) =>
        i.id !== item.id ? i : { ...i, quantity: i.quantity + 1 }
      );
      addItems(updatedItem);
    } else {
      addItems((items) => [...items, item]);
    }

    setTimeout(() => {
      setToastsList((prev) => prev.filter((item, i) => i !== 0));
    }, 3000);
  };

  const HandleFilter = (type) => {
    const updatedData =
      type === "All" ? DATA : DATA.filter((item) => item.type === type);
    setFilteredItems(updatedData);
  };

  const HandleSortClick = (type) => {
    if (type === "Price:L-H") {
      const sortedItems = [...filteredItems].sort((a, b) => a.price - b.price);
      setFilteredItems(sortedItems);
    } else if (type === "Price:H-L") {
      const sortedItems = [...filteredItems].sort((a, b) => b.price - a.price);
      setFilteredItems(sortedItems);
    } else if (type === "Name:asc") {
      const sortedItems = [...filteredItems].sort(
        (a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0)
      );
      setFilteredItems(sortedItems);
    } else if (type === "Name:desc") {
      const sortedItems = [...filteredItems].sort(
        (a, b) => b.title.charCodeAt(0) - a.title.charCodeAt(0)
      );
      setFilteredItems(sortedItems);
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-1 dropdown-container"
            style={{ padding: "10px" }}
          >
            <DropdownMenu
              HandleFilter={HandleFilter}
              dropdownTitle={"Filter"}
              items={FILTER_DROPDOWN}
            />
            <DropdownMenu
              HandleFilter={HandleSortClick}
              dropdownTitle={"Sort"}
              items={SORT_DROPDOWN}
            />
            <div>
            <Button variant="danger" onClick={() => setFilteredItems([...DATA])}>Reset</Button>
            </div>
          </div>
          <div className="col-md-7" style={{ padding: "10px" }}>
            <div className="row">
              {filteredItems.map((item, i) => (
                <CardItem key={i} item={item} handleAdd={handleAdd} />
              ))}
            </div>
          </div>
          <Cart items={items} total={total} />
        </div>
      </div>
      <div className="toast-container position-absolute top-0 end-0">
        {toastsList.map((title) => (
          <Toasts title={title} />
        ))}
      </div>
    </>
  );
}
export default MainContainer;
