import React, { useState, useEffect } from "react";
import Toasts from "./Toasts";
import Cart from "./Cart";
import CardItem from "./CardItem";
import { DATA } from "../constant";
import Navbar from "./Navbar";

function MainContainer() {
  // State hooks to manage--
  const [items, setItems] = useState([]); //items in cart
  const [filteredItems, setFilteredItems] = useState([]); //filtered items displayed on UI
  const [total, setTotal] = useState(0); //total price of items in cart
  const [toastsList, setToastsList] = useState([]); //toast list for notification
  // State hook to manage the currently active filter (e.g., "All", "Fruits", "Veggies")
  const [activeFilter, setActiveFilter] = useState("All");

  //state hook to manage the current sorting type
  const [currentSort, setCurrentSort] = useState();
  // State hook to manage sorting order for price, title, and category
  const [order, setOrder] = useState({
    priceOrder: false,
    titleOrder: false,
    catOrder: false,
  });
  // Handler function to add an item to the cart
  const handleAdd = (option) => {
    // Create a copy of the current items in the cart
    const updatedItems = [...items];
    // Find the index of the item in the cart
    const index = updatedItems.findIndex((item) => item.id === option.id);

    // If the item is already in the cart, update its quantity
    if (index !== -1) {
      //condition that evaluates to true if the element is found in the array (i.e., index is not -1) and false if the element is not found.
      updatedItems[index] = {
        ...updatedItems[index],
        quantity: updatedItems[index].quantity + 1,
      };
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      updatedItems.push({ ...option, quantity: 1 });
    }

    // Update the state with the new cart items, total price, and toast notification
    setItems(updatedItems);
    setTotal((prevTotal) => prevTotal + option.price);
    setToastsList((prev) => [...prev, `Added: ${option.title}`]);

    // Remove the toast after 3 seconds
    setTimeout(() => setToastsList((prev) => prev.slice(1)), 3000);
  };

  // Handler function to remove an item from the cart
  const handleRemove = (option) => {
    // Create a copy of the current items in the cart
    const updatedItems = items
      .map((item) =>
        item.id === option.id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);

    // Update the state with the new cart items, total price, and toast notification
    setItems(updatedItems);
    setTotal((prevTotal) => prevTotal - option.price);
    setToastsList((prev) => [...prev, `Removed: ${option.title}`]);

    // Remove the toast after 3 seconds
    setTimeout(() => setToastsList((prev) => prev.slice(1)), 3000);
  };

  // Handler function to apply a filter to the displayed items
  const handleFilter = (type) => {
    // Set the active filter
    setActiveFilter(type);

    // Update the displayed items based on the selected filter
    const updatedData =
      type === "All" ? DATA : DATA.filter((item) => item.type === type);
    setFilteredItems(updatedData);
  };

  // Handler function to initiate sorting based on the selected type (e.g., Price, Title)
  const handleSort = (type) => {
    // Set the current sorting type
    setCurrentSort(type);

    // Toggle the sorting order for the selected type
    setOrder((prev) => ({
      ...prev,
      [type.toLowerCase() + "Order"]: !prev[type.toLowerCase() + "Order"],
    }));
  };

  // Handler function to reset sorting
  const handleReset = () => {
    // Reset the current sorting type and sorting order
    setCurrentSort(null);
    setOrder({ priceOrder: false, titleOrder: false, catOrder: false });
  };

  // Effect hook to perform sorting and filtering when relevant state changes
  useEffect(() => {
    // If there is no current sorting type, do nothing
    if (!currentSort) return;
    // Create a copy of the filtered items
    let sortedItems = [...filteredItems];
    // Determine the sorting order (ascending or descending)
    const asc = order[currentSort.toLowerCase() + "Order"] ? 1 : -1;

    sortedItems.sort((a, b) => {
      if (currentSort === "Price") return asc * (a.price - b.price);
      if (currentSort === "Title") return asc * a.title.localeCompare(b.title);
      return asc * a.type.localeCompare(b.type);
    });
    setFilteredItems(sortedItems);
  }, [order, activeFilter, currentSort]);
  // Effect hook to load stored cart items from localStorage on component mount
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setItems(storedItems);
    setFilteredItems(DATA);
  }, []);
  // Effect hook to update localStorage when cart items change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <Navbar
        activeFilter={activeFilter}
        order={order}
        items={items}
        total={total}
        handleFilter={handleFilter}
        handleAdd={handleAdd}
        handleRemove={handleRemove}
        handleSort={handleSort}
        onReset={handleReset}
      />
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-8 col-lg-8 col-xl-8"
            style={{ padding: "10px" }}
          >
            <div className="row">
              {filteredItems.map((item, i) => (
                <CardItem key={i} item={item} onAdd={handleAdd} />
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
              onAdd={handleAdd}
              onRemove={handleRemove}
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
