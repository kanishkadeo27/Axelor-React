import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import { SORT_DROPDOWN } from "../constant";

function DropdownMenu({ order, handleSort, onReset }) {
  //state to check which dropdown menu is active
  const [active, setActive] = useState(null);

  const handleReset = () => {
    setActive(null);
    onReset();
  };
  return (
    <Dropdown className="p-2">
      <Dropdown.Toggle id="dropdown-basic" className="dropdown_toggle">
        Sort
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu">
        {SORT_DROPDOWN.map((item) => (
          <Dropdown.Item
            key={item.id}
            onClick={() => {
              setActive(item);
              handleSort(item.title);
            }}
            className={`${active === item && "active"}`}
          >
            {item.title}{" "}
            {active?.id === item.id ? (
              order[item.order] === true ? (
                <i className="fa-solid fa-arrow-up"></i>
              ) : (
                <i className="fa-solid fa-arrow-down"></i>
              )
            ) : (
              ""
            )}
          </Dropdown.Item>
        ))}
        <Dropdown.Divider />
        <Dropdown.Item onClick={handleReset}>Reset</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownMenu;
