import React from "react";
import EmptyCart from "./EmptyCart";
import FillCart from "./FillCart";

function Cart({ items, handleAdd, total, handleRemove }) {
  return (
    <div>
      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <ol className="list-group list-group-numbered">
            {items.map((item, i) => (
              <FillCart
                item={item}
                key={i}
                handleAdd={handleAdd}
                handleRemove={handleRemove}
              />
            ))}
          </ol>
          <div className="d-flex justify-content-between align-items-center list-group-item">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Net Total</div>
            </div>
            <span variant="primary" className="badge rounded-pill bg-primary">
              {total.toFixed(2)}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
