

function FillCart({ item, handleRemove,handleAdd}) {
  return (
    <>
      <li className="d-flex justify-content-between align-items-center list-group-item">
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            {item.title}/₹{item.price}{" "}
          </div>{" "}
          <span className="mr-2 px-1 py-1 bg-danger "  onClick={()=>handleRemove(item)}> - </span>&nbsp;
        {item.quantity}
        &nbsp;<span className="mr-2 px-1 py-1 bg-success cursor-pointer" onClick={()=>handleAdd(item)}> + </span>
        </div>
        <span variant="primary" className="badge rounded-pill bg-primary">
          {item.price.toFixed(2) * item.quantity}
        </span>
      </li>
    </>
  );
}

export default FillCart;
