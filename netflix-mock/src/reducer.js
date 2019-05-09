import movies from "./data.json";

const initState = {
  mylist: movies.mylist,
  recom: movies.recommendations
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "REMOVE":
      return {
        ...state,
        mylist: state.mylist.filter(item => item.id !== action.id)
      };

    case "ADD":
      return {
        mylist: [
          ...state.mylist,
          {
            title: action.title,
            id: action.id,
            img: action.img
          }
        ],
        recom: state.recom.filter(item => item.id !== action.id)
      };

    default:
      return state;
  }
};

export default reducer;
