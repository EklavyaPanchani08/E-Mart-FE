const cart = [];

const handelCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      const editExit = state.find((e) => e.id === product.id);
      if (editExit) {
        return state.map((d) =>
          d.id === product.id ? { ...d, qua: d.qua + 1 } : d
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qua: 1,
          },
        ];
      }
      break;
    case "DELITEM":
      const deleteExit = state.find((e) => e.id === product.id);
      if (deleteExit.qua === 1) {
        return state.filter((d) => d.id === deleteExit.id);
      } else {
        return state.map((d) =>
          d.id === product.id ? { ...d, qua: d.qua - 1 } : d
        );
      }
      break;

    default:
      return state;
      break;
  }
};
export default handelCart;
