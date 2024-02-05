import React from "react";

function FillCart({ item, total }) {
  return (
    <>
      <li className="d-flex justify-content-between align-items-center list-group-item">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{item.title} </div>₹{item.price} *{" "}
          {item.quantity}
        </div>
        <span variant="primary" className="badge rounded-pill bg-primary">
          {item.price.toFixed(2)}
        </span>
      </li>
    </>
  );
}

export default FillCart;
