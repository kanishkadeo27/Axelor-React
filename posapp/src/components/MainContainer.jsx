import React, { useState } from "react";
import Toasts from "./Toasts";
import Cart from "./Cart";
import CardItem from "./CardItem";
import DropdownMenu from "./Dropdown";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { DATA, SORT_DROPDOWN, FILTER_DROPDOWN } from "../constant";

function MainContainer() {
  const [items, setItems] = useState([]);
  //useeffect
  const [filteredItems, setFilteredItems] = useState([...DATA]);
  const [total, setTotal] = useState(0);
  const [toastsList, setToastsList] = useState([]);
  const [activeFilter, setActiveFilter] = useState("");

  const [order, setOrder] = useState({
    priceOrder: false,
    titleOrder: false,
    catOrder: false,
  });

  const handleAdd = (item) => {
    setToastsList((prev) => [...prev, `Added: ${item.title}`]);
    setTotal((prevTotal) => Number(prevTotal) + item.price);
    const isExist = items.find((it) => it.id === item.id);

    if (isExist) {
      const updatedItem = items.map((i) =>
        i.id !== item.id ? i : { ...i, quantity: i.quantity + 1 }
      );
      setItems(updatedItem);
    } else {
      setItems((items) => [...items, item]);
    }

    setTimeout(() => {
      setToastsList((prev) => prev.filter((item, i) => i !== 0));
    }, 3000);
  };

  const handleRemove = (item) => {
    setToastsList((prev) => [...prev, `Removed: ${clickedItem.title}`]);

    const clickedItem = items.find((it) => it.id === item.id);
    if (clickedItem.quantity == 1) {
      setTotal((prevTotal) => Number(prevTotal) - clickedItem.price);
      setItems((prev) => prev.filter((item) => item.id !== clickedItem.id));
    }
    if (clickedItem.quantity > 1) {
      setTotal((prevTotal) => Number(prevTotal) - clickedItem.price);
      setItems((prev) =>
        prev.map((item2) =>
          item2.id === item.id
            ? { ...item2, quantity: item2.quantity - 1 }
            : item2
        )
      );
    }
    setTimeout(() => {
      setToastsList((prev) => prev.filter((item, i) => i !== 0));
    }, 3000);
  };

  const HandleFilter = (type) => {
    setActiveFilter(type);
    const updatedData =
      type === "All" ? DATA : DATA.filter((item) => item.type === type);
    setFilteredItems(updatedData);
  };

  const HandleSortClick = (type) => {
    if (type === "Price") {
      const asc = order.priceOrder ? -1 : 1;
      setOrder((prev) => ({ ...prev, priceOrder: !order.priceOrder }));
      const sortedItems = filteredItems.sort(
        (a, b) => asc * (a.price - b.price)
      );
      setFilteredItems(sortedItems);
    } else if (type === "Title") {
      const asc = order.titleOrder ? -1 : 1;
      setOrder((prev) => ({ ...prev, titleOrder: !order.titleOrder }));
      const sortedItems = filteredItems.sort(
        (a, b) => asc * a.title.localeCompare(b.title)
      );
      setFilteredItems(sortedItems);
    } else {
      const asc = order.catOrder ? -1 : 1;
      setOrder((prev) => ({ ...prev, catOrder: !order.catOrder }));
      const sortedItems = filteredItems.sort(
        (a, b) => asc * a.type.localeCompare(b.type)
      );
      setFilteredItems(sortedItems);
    }
  };

  console.log(order);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "#334155" }}
      >
        <div className="container-md d-flex flex-row justify-content-start align-items-center">
          <a
            href="#home"
            className="navbar-brand p-2"
            style={{ color: "#fafafa", fontWeight: "bold" }}
          >
            GroceryBasket
          </a>
          {FILTER_DROPDOWN.map((item, id) => (
            <a
              className={`navbar-brand p-2 navbar_links ${
                activeFilter === item.title ? "active" : ""
              }`}
              style={{ color: "gray", cursor: "pointer" }}
              onClick={() => HandleFilter(item.title)}
              key={item.id}
            >
              {item.title}
            </a>
          ))}
          <DropdownMenu
            HandleFilter={HandleSortClick}
            items={SORT_DROPDOWN}
            setFilteredItems={setFilteredItems}
            DATA={DATA}
            order={order}
          />
        </div>
        <OverlayTrigger
          trigger="click"
          placement="bottom"
          overlay={
            <Popover id="popover-basic">
              <Cart
                items={items}
                total={total}
                handleAdd={handleAdd}
                handleRemove={handleRemove}
                className="cart_popup"
              />
            </Popover>
          }
        >
          <button
            type="button"
            class="bg-transparent border-0 mx-2 position-relative"
          >
            <i
              className="fa-solid fa-cart-shopping"
              style={{
                cursor: "pointer",
                color: "#ffffff",
                fontSize: "30px",
                marginRight: "10px",
              }}
            ></i>
            {items.length !== 0 ? (
              <p className="popover_count top-0 end-0">{items.length}</p>
            ) : null}
          </button>
        </OverlayTrigger>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-8 col-lg-8 col-xl-8"
            style={{ padding: "10px" }}
          >
            <div className="row">
              {filteredItems.map((item, i) => (
                <CardItem key={i} item={item} handleAdd={handleAdd} />
              ))}
            </div>
          </div>
          <div
            className="col-md-4 col-lg-3 col-xl-4"
            style={{ padding: "10px" }}
          >
            <Cart
              items={items}
              total={total}
              handleAdd={handleAdd}
              handleRemove={handleRemove}
            />
          </div>
        </div>
      </div>
      <div className="toast-container position-absolute bottom-0 end-0">
        {toastsList.map((title) => (
          <Toasts title={title} />
        ))}
      </div>
    </>
  );
}
export default MainContainer;
