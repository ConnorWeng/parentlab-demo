export const content = (state = { content: {} }, action) => {
  switch (action.type) {
  case 'SET_CONTENT':
    return Object.assign({}, state, {
      content: action.content,
    });
  default:
    return state;
  }
};
