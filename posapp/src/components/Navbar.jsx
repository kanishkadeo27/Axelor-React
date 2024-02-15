import React from "react";
import { FILTER_DROPDOWN , DATA} from "../constant";
import DropdownMenu from "./Dropdown";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Cart from "./Cart";

function Navbar({
  activeFilter,
  HandleFilter,
  handleAdd,
  handleRemove,
  HandleSortClick,
  setFilteredItems,
  order,
  items,
  total

}) {
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
            <span
              className={`navbar-brand p-2 navbar_links ${
                activeFilter === item.title ? "active" : ""
              }`}
              style={{ color: "gray", cursor: "pointer" }}
              onClick={() => HandleFilter(item.title)}
              key={item.id}
            >
              {item.title}
            </span>
          ))}
          <DropdownMenu
            HandleFilter={HandleSortClick}
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
    </>
  );
}

export default Navbar;
