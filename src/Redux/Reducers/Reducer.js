const initialState = {
  count: 0,
};

const Reducer = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === "ADD") {
    newState.count++;
  }
  if (action.type === "SUBTRACT") {
    newState.count--;
  }
  return newState;
};
export default Reducer;
