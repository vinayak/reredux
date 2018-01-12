import React, { Component } from 'react';

class Shelf extends Component {
  constructor(props){
    super(props)
    console.log(props)
    this.state ={
      selfItems:[
        "shampoo",
        "chocolate",
        "yougurt"
      ]
    }
    this.onClickAdd=this.onClickAdd.bind(this)
    this.onClear=this.onClear.bind(this)
  }
  onClickAdd(item){
    this.props.action.addToCart(item)
  }
  onClear(){
    this.props.action.clear()
  }
  render() {
    const selfItems = this.state.selfItems.map((item, idx)=>{
      return <li key={idx}><button onClick={()=>this.onClickAdd(item)}>[+]</button>{item}</li>
    })
    return (
      <div>
      <h2>Shelf</h2>
      <ul>
        {selfItems}
      </ul>
      <button onClick={()=>this.onClear()}>clear</button>
      </div>
    );
  }
}

export default Shelf;
