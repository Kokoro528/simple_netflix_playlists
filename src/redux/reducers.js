const initState = {
  mylist: [
    {
      title: "Futurama",

      id: 1,

      img: "http://cdn1.nflximg.net/webp/7621/3787621.webp"
    },

    {
      title: "The Interview",

      id: 2,

      img: "http://cdn1.nflximg.net/webp/1381/11971381.webp"
    },

    {
      title: "Gilmore Girls",

      id: 3,

      img: "http://cdn1.nflximg.net/webp/7451/11317451.webp"
    }
  ],

  recommendations: [
    {
      title: "Family Guy",

      id: 4,

      img: "http://cdn5.nflximg.net/webp/5815/2515815.webp"
    },

    {
      title: "The Croods",

      id: 5,

      img: "http://cdn3.nflximg.net/webp/2353/3862353.webp"
    },

    {
      title: "Friends",

      id: 6,

      img: "http://cdn0.nflximg.net/webp/3200/9163200.webp"
    }
  ]
};

const reducer = (state = initState, action) => {
  let newMyList;
  let newRecommendation;
  switch (action.type) {
    case "REMOVE_LIKE":
      newMyList = state.mylist.filter(e => e.id !== action.id);
      newRecommendation = [
        ...state.recommendations,
        state.mylist.find(e => e.id === action.id)
      ];
      return {
        ...state,
        mylist: newMyList,
        recommendations: newRecommendation
      };
    case "ADD_LIKE":
      newRecommendation = state.recommendations.filter(e => e.id !== action.id);
      newMyList = [
        ...state.mylist,
        state.recommendations.find(e => e.id === action.id)
      ];
      return {
        ...state,
        mylist: newMyList,
        recommendations: newRecommendation
      };
    default:
      return state;
  }
};

export default reducer;
