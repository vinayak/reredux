export const addToCart = (item) =>{
  console.log("adding item ", item)
  return {
    type: 'add',
    item
  }
}

export const clear = () =>{
  console.log("Clearing .....")
  return {
    type: 'clear'
  }
}
