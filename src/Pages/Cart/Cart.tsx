import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { State } from "../../state/reducers";
// styles
import "./Cart.css";

const Cart = () => {
  /*const calculateTotal = (total: any, currentItem: { price: number; quantity: any; }) =>
    parseFloat(total + currentItem.price * (currentItem.quantity || 1));
  */

  const product = useSelector((state: State) => state.product);

  const {id, image, title, price, category, description, rating}: any = product;
  //let { rating } : any | Rating = product; // to get rating count which is the reviews
console.log('cart', title) // {} ==>  push with item
  // console.log('cart1', product)
  
  return (
    <section className="h-100 h-custom">
      <div className="container py-5 h-100">
        <Row className=" d-flex justify-content-center align-items-center h-100">
          <Col className="col-12">
            <Card className="card-registration card-registration-2">
              <Card.Body className="p-0">
                <Row className="g-0">
                  <Col lg={8}>
                   
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0 text-black">
                          Shopping Cart
                        </h1>
                        </div>

                      <Row className=" mb-4 d-flex justify-content-between align-items-center">
                        <Col md={2} lg={2} xl={2}>
                          <img
                            src={image}
                            className="img-fluid rounded-3"
                            alt=""
                          />
                        </Col>

                        <Col md={3} lg={3} xl={3}>
                          <h6 className="text-muted">{category}</h6>
                          <h6 className="text-black mb-0">{title}t</h6>
                        </Col>

                        <Col className="d-flex" md={3} lg={3} xl={2}>
                          <button className="btn btn-link px-2">
                            <i className="fas fa-minus"></i>
                          </button>

                          <input
                            id="form1"
                            min="0"
                            name="quantity"
                            value="1"
                            type="number"
                            className="form-control form-control-sm"
                          />

                          <button className="btn btn-link px-2">
                            <i className="fas fa-plus"></i>
                          </button>
                        </Col>

                        <Col className="offset-lg-1" md={3} lg={2} xl={2}>
                          <h6 className="mb-0">{price}</h6>
                        </Col>
                        <Col className="text-end" md={1} lg={1} xl={1}>
                          <i className="fas fa-trash-alt"></i>                          
                        </Col>
                      </Row>

                      <hr className="my-4" />

                      <div className="pt-5">
                    <h5 className="mb-0"><Link to="/" className="text-body"><i
                     className="fas fa-long-arrow-alt-left me-2"></i> Continue Shopping</Link></h5>
                  </div>
                    </div>
                  </Col>

               <Col className="bg-grey" lg={4}>
                   <div className="p-5">
                  <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                  <hr className="my-4"/>

                  <div className="d-flex justify-content-between mb-4">
                    <h5 className="text-uppercase">items 3</h5>
                    <h5>$ 132.00</h5>
                  </div>

                  <h5 className="text-uppercase mb-3">Shipping</h5>

                  <div className="mb-4 pb-2">
                    <select className="select">
                      <option value="1">Standard-Delivery- €5.00</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                      <option value="4">Four</option>
                    </select>
                  </div>

                  <h5 className="text-uppercase mb-3">Give code</h5>

                  <div className="mb-5">
                    <div className="form-outline">
                      <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Examplea2">Enter your code</label>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="d-flex justify-content-between mb-5">
                    <h5 className="text-uppercase">Subtotal</h5>
                    <h5>$ 137.00</h5>
                  </div>

                  <button type="button" className="btn btn-dark btn-block btn-lg"
                    data-mdb-ripple-color="dark">Checkout</button>
                </div>
                 </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Cart;
