import { createStore } from "redux";

const initialState = {
  roomSliderIndex: 0,
  imageClass: "",
  open: [true, false, false, false, false],
  notificationOpen: false,
  today: new Date(),
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  roomIndex:
    localStorage.getItem("Room_Index") !== null
      ? localStorage.getItem("Room_Index")
      : 0,
  slideImageIndex: 0,
  openImageSlider: false,
  openRestaurantSlider: false,
  openBurger: true,
};

const reducer = (state = initialState, action) => {
  if (action.type === "CHANGE_INDEX") {
    return { ...state, roomSliderIndex: action.payload };
  }
  if (action.type === "SET_IMAGE_CLASS") {
    return { ...state, imageClass: action.payload };
  }
  if (action.type === "OPEN_FACALITIES") {
    return { ...state, open: action.payload };
  }
  if (action.type === "OPEN_NOTIFICATION") {
    return { ...state, notificationOpen: action.payload };
  }
  if (action.type === "CHANGE_ROOMINDEX") {
    return { ...state, roomIndex: action.payload };
  }
  if (action.type === "CHANGE_SLIDE_IMAGE_INDEX") {
    return { ...state, slideImageIndex: action.payload };
  }
  if (action.type === "OPEN_IMAGE_SLIDER") {
    return { ...state, openImageSlider: action.payload };
  }
  if (action.type === "OPEN_RESTAURANT_SLIDER") {
    return { ...state, openRestaurantSlider: action.payload };
  }
  if (action.type === "IS_CONTAINER_DARK_CHANGE") {
    return { ...state, isContainerDark: action.payload };
  }
  if (action.type === "BURGER_MENU_CHANGE") {
    return { ...state, openBurger: action.payload };
  }

  return state;
};

export const store = createStore(reducer);
