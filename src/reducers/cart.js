export default(state=[], payload)=>{
  switch(payload.type){
    case 'add':
      return [...state, payload.item]
    case 'clear':
      return []
    default:
      return state;
  }
}
