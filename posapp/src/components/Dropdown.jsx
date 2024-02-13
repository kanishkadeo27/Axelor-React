import Dropdown from "react-bootstrap/Dropdown";

function DropdownMenu({ HandleFilter, items, dropdownTitle }) {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="success"
        id="dropdown-basic"
        style={{ width: "80px" }}
      >
        {dropdownTitle}
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu">
        {items.map((item, id) => (
          <Dropdown.Item
            onClick={() => HandleFilter(item.title)}
            key={item.id}
          >
            {item.title}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownMenu;
