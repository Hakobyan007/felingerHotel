import React from "react";
import { Link } from "react-router-dom";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const headerComponents = [
    "About",
    "Rooms",
    "Restaurant",
    "Conference hall",
    "Contacts",
  ];
  const openBurger = useSelector((state) => state.openBurger);
  const dispatch = useDispatch();

  document.body.style.overflowY = openBurger ? "visible" : "hidden";
  return (
    <header>
      <Link to="/">Felinger Hotel</Link>
      <nav className={openBurger ? 'open__navbar' : ''}>
        <Link
          onClick={() =>
            dispatch({ type: "BURGER_MENU_CHANGE", payload: true })
          }
          to="/"
        >
          Home
        </Link>
        {headerComponents.map((item, index) => {
          return (
            <Link
              to={item.replace(" ", "-")}
              key={index}
              onClick={() =>
                dispatch({ type: "BURGER_MENU_CHANGE", payload: true })
              }
            >
              {item}
            </Link>
          );
        })}
      </nav>
      <p>+374(11) 20-10-10</p>
      {openBurger ? (
        <IoMenuOutline
          onClick={() =>
            dispatch({ type: "BURGER_MENU_CHANGE", payload: false })
          }
        />
      ) : (
        <IoCloseOutline
          onClick={() =>
            dispatch({ type: "BURGER_MENU_CHANGE", payload: true })
          }
        />
      )}
    </header>
  );
}
