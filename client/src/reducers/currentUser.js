const currentUserReducer = (state= null, actions) => {
  switch (actions.type) {
    case 'FETCH_CURRENT_USER':
      return actions.payload
    default:
      return state;
  }
}

export default currentUserReducer