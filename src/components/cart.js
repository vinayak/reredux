import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as CartActions from '../actions/cart';
import Shelf from './shelf';

class Cart extends Component {
  render() {    
    console.log(this.props)
    const CartItems =this.props.cart.map((item, idx)=>{
      return <li key={idx}>{item}</li>
    })
    return (
      <div className="Cart">
      <Shelf action={this.props.action1}/>
      <h2>Shopping Bag</h2>
        <ol>
          {CartItems}
        </ol>
      </div>
    );
  }
}

function mapStateToProps(state, props){
  return {
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch){
  return {
    action1 : bindActionCreators(CartActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
