

export default function commentReducer(state=['a'], action) {
  switch (action.type) {
    case 'a':
      return state;
    default:
      return state
  }
}