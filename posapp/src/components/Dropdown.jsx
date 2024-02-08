import Dropdown from "react-bootstrap/Dropdown";

function DropdownMenu({ HandleFilter, items, dropdownTitle }) {
  return (
    <Dropdown className="dropdown-container">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {dropdownTitle}
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu">
        {items.map((item, id) => (
          <Dropdown.Item href="#" onClick={() => HandleFilter(item.title)} key={item.id} >
            {item.title}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownMenu;
