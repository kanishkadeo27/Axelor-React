import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardItem({ item, handleAdd }) {
  return (
 <div className="col-md-4 col-lg-3  col-sm-6 col-12  p-1 card_div">
      <Card >
        <Card.Img variant="top" src={item.img} className="card_img"  
        />
        <Card.Body>
          <Card.Title className="card_title">{item.title}</Card.Title>
          <Card.Text>₹ {item.price}</Card.Text>
          <Button variant="primary" onClick={() => handleAdd(item)} className="cart_btn">
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
      </div>
  );
}

export default CardItem;
