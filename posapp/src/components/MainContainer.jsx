import React, { useState } from "react";
import Toasts from "./Toasts";
import { DATA } from "../constant";
import Cart from "./Cart";
import CardItem from "./CardItem";

function MainContainer() {
  const [items, addItems] = useState([]);
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
      setToastsList((prev) => prev.filter((item, i) => i != 0));
    }, 3000);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8" style={{ padding: "10px" }}>
            <div className="row">
              {DATA.map((item, i) => (
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
