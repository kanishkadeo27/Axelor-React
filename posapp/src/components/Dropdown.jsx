import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

function DropdownMenu({
  HandleFilter,
  items,
  setFilteredItems,
  DATA,
  order,
}) {
  const [active, setActive] = useState(null);

  return (
    <Dropdown className="p-2">
      <Dropdown.Toggle id="dropdown-basic" className="dropdown_toggle">
        Sort
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu">
        {items.map((item, id) => (
          <Dropdown.Item
            key={item.id}
            onClick={() => {
              setActive(item);
              HandleFilter(item.title);
            }}
            className={`${active == item && "active"}`}
          >
            {item.title}{" "}
            {active?.id === item.id ? (
              order[item.order] === true ? (
                <i class="fa-solid fa-arrow-up"></i>
              ) : (
                <i class="fa-solid fa-arrow-down"></i>
              )
            ) : (
              ""
            )}
          </Dropdown.Item>
        ))}
        <Dropdown.Divider />
        <Dropdown.Item
          onClick={() => {
            setActive(null);
            setFilteredItems([...DATA]);
          }}
        >
          Reset
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownMenu;
