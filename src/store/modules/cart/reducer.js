export default function cart(state, action) {
  // 'state', current state
  // 'action' what is being sent
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    default:
      return [];
  }
}
