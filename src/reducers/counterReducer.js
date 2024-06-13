const counterReducer = (state ={Counter1:0}, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { Counter1: state.Counter1 + 1 };

    default:
      return { Counter1: state.Counter1 };
  }
};

export default counterReducer;
