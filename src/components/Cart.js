import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteItemFromCart } from "../redux/cart/cartActions";

export class Cart extends Component {
  render() {
    const { cartItems } = this.props;

    return (
      <div className="thumbnail cart">
        <h2 className="title">CART - {cartItems.length}</h2>
        <div className="products-list">
          {cartItems.map(item => (
            <div className="product" key={item.id}>
              <div className="product-img">
                <img src={`/products/${item.sku}_2.jpg`} />
              </div>

              <div className="product-infos">
                <p className="title title-sm">{item.title}</p>
                <p className="price-sm">
                  {" "}
                  <i className="fa fa-eur"></i> {item.price}
                </p>
                <p className="quantity quantity-sm">
                  Quantity : {item.quantity}
                </p>
                <span
                  className="product-delete"
                  onClick={() => this.props.deleteItemFromCart(cartItems, item)}
                >
                  <i className="fa fa-trash-o"></i>
                </span>
              </div>
            </div>
          ))}
          <hr />

          <p className="total-price">
            TOTAL: 1500 <i className="fa fa-eur"></i>{" "}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems
  };
};
export default connect(mapStateToProps, { deleteItemFromCart })(Cart);
