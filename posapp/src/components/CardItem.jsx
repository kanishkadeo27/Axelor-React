import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardItem({ item, handleAdd }) {
  return (
    <div className="col-md-2 mb-4">
      <Card className="card-container">
        <Card.Img variant="top" src={item.img} className="img" />
        <Card.Body>
          <Card.Title className="card-title">{item.title}</Card.Title>
          <Card.Text>₹ {item.price}</Card.Text>
          <Button variant="primary" onClick={() => handleAdd(item)}>
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardItem;
