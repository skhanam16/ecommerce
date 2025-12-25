import { Link, useParams } from "react-router-dom"
import products from '../products.js'
import { Card, Col, ListGroup, Row, Image, Button } from "react-bootstrap";
import Rating from "../components/Rating.jsx";

const ProductScreen = () => {
    const {id:productId} = useParams();
      const product = products.find(
    p => p._id === productId // or Number(productId)
 );
    if(!product){
        return <div>there is no product</div>
    }
    const {name, rating, price, description, image, numReviews, countInStock } = product;
  
  return <> 
  <Link className="btn btn-light my-3" to='/'>Go back</Link>
<Row>
    <Col md={5}><Image src={image} alt={name} fluid /></Col>
     <Col md={4}>
        <ListGroup>
            <ListGroup.Item>
                <h3>{name}</h3>
            </ListGroup.Item>
               <ListGroup.Item>
                <Rating value={rating} text={`${numReviews}reviews` } />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${price} </ListGroup.Item>
              <ListGroup.Item>Description: {description} </ListGroup.Item>
        </ListGroup>
    </Col>
     <Col md={3}>
     <Card>
        <ListGroup variant="flush">
            <ListGroup.Item>
                <Row>
                    <Col>Price:</Col>
                    <Col>
                    <strong> ${price}</strong>
                   </Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Row>
                    <Col>Status:</Col>
                    <Col>
                    <strong> {countInStock > 0 ? 'In Stock' : 'Out of stock'}</strong>
                   </Col>
                </Row>
            </ListGroup.Item>
             <ListGroup.Item>
              <Button 
              type="button" 
              className="btn-block"
              disabled={countInStock === 0}
              >Add to Cart</Button>
            </ListGroup.Item>
        </ListGroup>
     </Card>
    </Col>
</Row>


  </>

}
export default ProductScreen