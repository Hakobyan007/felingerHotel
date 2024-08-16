import "./App.css";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import RoomsMain from "./pages/Rooms/RoomsMain";
import { useSelector } from "react-redux";
import { roomsImg } from "./lists/roomsImg";
import SingleRoomMain from "./pages/Rooms/SingleRooms/SingleRoomMain";
import ContactMain from "./pages/Contact/ContactMain";
import RestaurantMain from "./pages/Restaurant/RestaurantMain";
import AboutMain from "./pages/AboutHotel/AboutMain";
import FooterDark from "./components/Footer/FooterDark";
import GetInTouchDark from "./components/GetInTouch/GetInTouchDark";
import FindRoomDark from "./components/FindRoom/FindRoomDark";

function App() {
  const roomIndex = useSelector((state) => state.roomIndex);
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  useEffect(() => {
    document.title = `${location.pathname.replace("/", "")} ${
      location.pathname.replace("/", "") === "" ? "" : "-"
    } Felinger Hotel`;
  }, [location]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Main />} />
        <Route path="/rooms" element={<RoomsMain />} />
        <Route
          path={`/rooms/${roomsImg[roomIndex].name.replaceAll(" ", "-")}`}
          element={<SingleRoomMain />}
        />
        <Route path="/contacts" element={<ContactMain />} />
        <Route path="/restaurant" element={<RestaurantMain />} />
        <Route path="/about" element={<AboutMain />} />
      </Routes>
      <GetInTouchDark />
      <FindRoomDark />
      <FooterDark />
    </div>
  );
}

export default App;
