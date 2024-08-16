import standartSingleRoom from "../images/standartSingleRoom.jpg";
import standartSingleRoom2 from "../images/standartSingleRoom2.jpg";
import standartSingleRoom3 from "../images/standartSingleRoom3.jpg";
import standartSingleRoom4 from "../images/standartSingleRoom4.jpg";
import standartDoubleRoom from "../images/standartDoubleRoom.jpg";
import standartDoubleRoom2 from "../images/standartDoubleRoom2.jpg";
import standartDoubleRoom3 from "../images/standartDoubleRoom3.jpg";
import standartDoubleRoom4 from "../images/standartDoubleRoom4.jpg";
import standartDoubleRoom5 from "../images/standartDoubleRoom5.jpg";
import standartDoubleRoom6 from "../images/standartDoubleRoom6.jpg";
import standartPremiumRoom from "../images/standartPremiumRoom.jpg";
import standartPremiumRoom2 from "../images/standartPremiumRoom2.jpg";
import standartPremiumRoom3 from "../images/standartPremiumRoom3.jpg";
import standartPremiumRoom4 from "../images/standartPremiumRoom4.jpg";
import standartSuiteRoom from "../images/standartSuiteRoom.jpg";
import standartSuiteRoom2 from "../images/standartSuiteRoom2.jpg";
import standartSuiteRoom3 from "../images/standartSuiteRoom3.jpg";
import standartSuiteRoom4 from "../images/standartSuiteRoom4.jpg";
import deluxeTwinRoom from "../images/deluxeTwinRoom.jpg";
import deluxeTwinRoom2 from "../images/deluxeTwinRoom2.jpg";
import deluxeTwinRoom3 from "../images/deluxeTwinRoom3.jpg";
import deluxeTwinRoom4 from "../images/deluxeTwinRoom4.jpg";
import deluxeDoubleWBRoom from "../images/deluxeDoubleWBRoom.jpg";
import deluxeDoubleWBRoom2 from "../images/deluxeDoubleWBRoom2.jpg";
import deluxeDoubleWBRoom3 from "../images/deluxeDoubleWBRoom3.jpg";
import deluxeDoubleWBRoom4 from "../images/deluxeDoubleWBRoom4.jpg";
import deluxeDoubleWBRoom5 from "../images/deluxeDoubleWBRoom5.jpg";
import deluxeTwinWBRoom from "../images/deluxeTwinWBRoom.jpg";
import deluxeTwinWBRoom2 from "../images/deluxeTwinWBRoom2.jpg";
import deluxeTwinWBRoom3 from "../images/deluxeTwinWBRoom3.jpg";
import deluxeTwinWBRoom4 from "../images/deluxeTwinWBRoom4.jpg";
import deluxeTwinWBRoom5 from "../images/deluxeTwinWBRoom5.jpg";
import deluxeTwinWBRoom6 from "../images/deluxeTwinWBRoom6.jpg";
import deluxeTwinWBRoom7 from "../images/deluxeTwinWBRoom7.jpg";
import deluxePremiumRoom from "../images/deluxePremiumRoom.jpg";
import deluxePremiumRoom2 from "../images/deluxePremiumRoom2.jpg";
import deluxePremiumRoom3 from "../images/deluxePremiumRoom3.jpg";
import deluxePremiumRoom4 from "../images/deluxePremiumRoom4.jpg";
import deluxeDoubleRoom from "../images/deluxeDoubleRoom.jpg";
import deluxeDoubleRoom2 from "../images/deluxeDoubleRoom2.jpg";
import deluxeDoubleRoom3 from "../images/deluxeDoubleRoom3.jpg";
import deluxeDoubleRoom4 from "../images/deluxeDoubleRoom4.jpg";
import signatureSuiteRoom from "../images/signatureSuiteRoom.jpg";
import signatureSuiteRoom2 from "../images/signatureSuiteRoom2.jpg";
import signatureSuiteRoom3 from "../images/signatureSuiteRoom3.jpg";
import signatureSuiteRoom4 from "../images/signatureSuiteRoom4.jpg";
import signatureSuiteRoom5 from "../images/signatureSuiteRoom5.jpg";
import signatureSuiteRoom6 from "../images/signatureSuiteRoom6.jpg";
import hayasiSuiteRoom from "../images/hayasiSuiteRoom.jpg";
import hayasiSuiteRoom2 from "../images/hayasiSuiteRoom2.jpg";
import hayasiSuiteRoom3 from "../images/hayasiSuiteRoom3.jpg";
import hayasiSuiteRoom4 from "../images/hayasiSuiteRoom4.jpg";
import hayasiSuiteRoom5 from "../images/hayasiSuiteRoom5.jpg";
import hayasiSuiteRoom6 from "../images/hayasiSuiteRoom6.jpg";
import lagardaSuiteRoom from "../images/lagardaSuiteRoom.jpg";
import lagardaSuiteRoom2 from "../images/lagardaSuiteRoom2.jpg";
import lagardaSuiteRoom3 from "../images/lagardaSuiteRoom3.jpg";
import lagardaSuiteRoom4 from "../images/lagardaSuiteRoom4.jpg";
import lagardaSuiteRoom5 from "../images/lagardaSuiteRoom5.jpg";
import lagardaSuiteRoom6 from "../images/lagardaSuiteRoom6.jpg";
import lagardaSuiteRoom7 from "../images/lagardaSuiteRoom7.jpg";
import deluxePremiumFamilyRoom from "../images/deluxePremiumFamilyRoom.jpg";
import deluxePremiumFamilyRoom2 from "../images/deluxePremiumFamilyRoom2.jpg";
import deluxePremiumFamilyRoom3 from "../images/deluxePremiumFamilyRoom3.jpg";
import deluxePremiumFamilyRoom4 from "../images/deluxePremiumFamilyRoom4.jpg";
import { FaRegCircleCheck } from "react-icons/fa6";

export const roomsImg = [
  {
    id: Math.random(),
    src: [
      standartSingleRoom,
      standartSingleRoom2,
      standartSingleRoom3,
      standartSingleRoom4,
    ],
    name: "Standart Single Room",
    guestsNum: 1,
    priceForNight: 111,
    square: 24,
    about: `Standard Single room
    The spacious air-conditioned twin/double room offers a flat-screen TV, 
    a wardrobe, a safe deposit box, an electric kettle as well as city views.
    It has one room with one twin bed.`,
    mainAmenities: [
      "Smart TV",
      "Hair dryer",
      "Climate control system",
      "Wi-Fi",
      "Paid minibar",
    ],
    mainAmenitiesIcons: <FaRegCircleCheck />,
  },
  {
    id: Math.random(),
    src: [
      standartDoubleRoom,
      standartDoubleRoom2,
      standartDoubleRoom3,
      standartDoubleRoom4,
      standartDoubleRoom5,
      standartDoubleRoom6,
    ],
    name: "Standart Double Room",
    guestsNum: 2,
    priceForNight: 98,
    square: 28,
    about: `Standard Double Room
    The spacious air-conditioned twin/double room provides a flat-screen TV, 
    a wardrobe, a safe deposit box, an electric kettle as well as a quiet 
    street view.`,
    mainAmenities: [
      "Minibar",
      "Wi-Fi",
      "Housekeeping",
      "Bottled water",
      "Shower cabin",
    ],
    mainAmenitiesIcons: <FaRegCircleCheck />,
  },
  {
    id: Math.random(),
    src: [
      standartPremiumRoom,
      standartPremiumRoom2,
      standartPremiumRoom3,
      standartPremiumRoom4,
    ],
    name: "Standart Premium Room",
    guestsNum: 2,
    priceForNight: 104,
    square: 28,
    about: `Standard Premium Room
    The spacious air-conditioned family room provides a flat-screen TV, 
    a wardrobe, a safe deposit box, an electric kettle as well as city views.`,
    mainAmenities: ["Smart TV", "Hair dryer", "Wi-Fi", "Safe", "Paid minibar"],
    mainAmenitiesIcons: <FaRegCircleCheck />,
  },
  {
    id: Math.random(),
    src: [
      standartSuiteRoom,
      standartSuiteRoom2,
      standartSuiteRoom3,
      standartSuiteRoom4,
    ],
    name: "Standart Suite Room",
    guestsNum: 3,
    priceForNight: 215,
    square: 28,
    about: `Standard Suite Room
    The spacious air-conditioned twin/double room provides a flat-screen TV, 
    a wardrobe, a safe deposit box, an electric kettle as well as a quiet 
    street view. It has 2 rooms.`,
    mainAmenities: [
      "Smart TV",
      "Hair dryer",
      "Shower",
      "Security system",
      "Wi-Fi",
    ],
    mainAmenitiesIcons: <FaRegCircleCheck />,
  },
  {
    id: Math.random(),
    src: [
      deluxeTwinRoom,
      deluxeTwinRoom2,
      deluxeTwinRoom3,
      deluxeTwinRoom4,
    ],
    name: "Deluxe Twin Room",
    guestsNum: 2,
    priceForNight: 104,
    square: 28,
    about: `Deluxe Twin Room
    The spacious twin/double room offers air conditioning, a minibar, a balcony 
    with city views as well as a shared bathroom featuring a bath. The unit offers 3 beds.`,
    mainAmenities: [
      "Smart TV",
      "Wi-Fi",
      "Safe",
      "Shower cabin",
      "Paid minibar",
    ],
    mainAmenitiesIcons: <FaRegCircleCheck />,
  },
  {
    id: Math.random(),
    src: [
      deluxeDoubleWBRoom,
      deluxeDoubleWBRoom2,
      deluxeDoubleWBRoom3,
      deluxeDoubleWBRoom4,
      deluxeDoubleWBRoom5,
    ],
    name: "Deluxe Double With Balcony Room",
    guestsNum: 3,
    priceForNight: 104,
    square: 28,
    about: `Deluxe Double With Balcony
    The spacious double room features air conditioning, a minibar, a balcony with 
    city views as well as a shared bathroom boasting a bath. The unit has 1 double 
    bed, and 1 balcony.`,
    mainAmenities: [
      "Smart TV",
      "Hair dryer",
      "Electronic lock",
      "Wi-Fi",
      "Safe",
    ],
    mainAmenitiesIcons: <FaRegCircleCheck />,
  },
  {
    id: Math.random(),
    src: [
      deluxeTwinWBRoom,
      deluxeTwinWBRoom2,
      deluxeTwinWBRoom3,
      deluxeTwinWBRoom4,
      deluxeTwinWBRoom5,
      deluxeTwinWBRoom6,
      deluxeTwinWBRoom7,
    ],
    name: "Deluxe Twin With Balcony Room",
    guestsNum: 3,
    priceForNight: 111,
    square: 28,
    about: `Deluxe Twin Room With Balcony
    The spacious air-conditioned twin/double room offers a flat-screen TV, 
    a wardrobe, a safe deposit box, an electric kettle as well as city views. 
    The unit offers 2 beds, can put 1 extra bad.`,
    mainAmenities: ["Minibar", "Smart TV", "Non-smoking room", "Wi-Fi", "Safe"],
    mainAmenitiesIcons: <FaRegCircleCheck />,
  },
  {
    id: Math.random(),
    src: [
      deluxePremiumRoom,
      deluxePremiumRoom2,
      deluxePremiumRoom3,
      deluxePremiumRoom4,
    ],
    name: "Deluxe Premium Room",
    guestsNum: 4,
    priceForNight: 154,
    square: 28,
    about: `Two Deluxe Twin Beds
    The spacious air-conditioned twin/double room offers a flat-screen TV, a wardrobe, 
    a safe deposit box, an electric kettle as well as city views. The unit offers 2 beds, 
    and can put 2 extra beds.`,
    mainAmenities: ["Wi-Fi", "Hair dryer", "Safe", "Minibar", "Shower cabin"],
    mainAmenitiesIcons: <FaRegCircleCheck />,
  },
  {
    id: Math.random(),
    src: [
      deluxeDoubleRoom,
      deluxeDoubleRoom2,
      deluxeDoubleRoom3,
      deluxeDoubleRoom4,
    ],
    name: "Deluxe Double Room",
    guestsNum: 3,
    priceForNight: 104,
    square: 28,
    about: `Deluxe Double Room
    The spacious air-conditioned suite features a flat-screen TV, a wardrobe, 
    a safe deposit box, an electric kettle as well as city views. The unit has 2 beds.`,
    mainAmenities: [
      "Smart TV",
      "Climate control system",
      "Hair dryer",
      "Electronic lock",
      "Wi-Fi",
    ],
    mainAmenitiesIcons: <FaRegCircleCheck />,
  },
  {
    id: Math.random(),
    src: [
      signatureSuiteRoom,
      signatureSuiteRoom2,
      signatureSuiteRoom3,
      signatureSuiteRoom4,
      signatureSuiteRoom5,
      signatureSuiteRoom6,
    ],
    name: "Signature Suite Room",
    guestsNum: 3,
    priceForNight: 462,
    square: 65,
    rooms: 3,
    about: `Signature Suite Room
    The spacious air-conditioned suite offers a flat-screen TV, a wardrobe, 
    a safe deposit box, an electric kettle as well as city views. The unit 
    offers 1 bed. It including 3 rooms.`,
    mainAmenities: ["Safe", "Shower cabin", "Bathrobe", "Wi-Fi", "Minibar"],
    mainAmenitiesIcons: <FaRegCircleCheck />,
  },
  {
    id: Math.random(),
    src: [
      hayasiSuiteRoom,
      hayasiSuiteRoom2,
      hayasiSuiteRoom3,
      hayasiSuiteRoom4,
      hayasiSuiteRoom5,
      hayasiSuiteRoom6,
    ],
    name: "Hayasi Suite Room",
    guestsNum: 3,
    priceForNight: 385,
    square: 65,
    rooms: 3,
    about: `Hayasi Suite Room
    The spacious air-conditioned suite offers a flat-screen TV, a wardrobe, a safe deposit box, 
    an electric kettle as well as city views. The unit offers 1 bed. It including 3 rooms.
    In the room you have a Brandy as a present`,
    mainAmenities: ["Safe", "Shower cabin", "Bathrobe", "Wi-Fi", "Minibar"],
    mainAmenitiesIcons: <FaRegCircleCheck />,
  },
  {
    id: Math.random(),
    src: [
      lagardaSuiteRoom,
      lagardaSuiteRoom2,
      lagardaSuiteRoom3,
      lagardaSuiteRoom4,
      lagardaSuiteRoom5,
      lagardaSuiteRoom6,
      lagardaSuiteRoom7,
    ],
    name: "Lagarda Suite Room",
    guestsNum: 3,
    priceForNight: 385,
    square: 65,
    rooms: 3,
    about: `Lagarda Suite Room
    The spacious air-conditioned suite offers a flat-screen TV, a wardrobe, a safe deposit 
    box, an electric kettle as well as city views. The unit offers 1 bed. It including 3 rooms.
    In the room you have a Cosmetics as a present`,
    mainAmenities: ["Safe", "Shower cabin", "Bathrobe", "Wi-Fi", "Minibar"],
    mainAmenitiesIcons: <FaRegCircleCheck />,
  },
  {
    id: Math.random(),
    src: [
      deluxePremiumFamilyRoom,
      deluxePremiumFamilyRoom2,
      deluxePremiumFamilyRoom3,
      deluxePremiumFamilyRoom4,
    ],
    name: "Deluxe Premium Family Room",
    guestsNum: 7,
    priceForNight: 385,
    square:67,
    rooms: 6,
    about: `The Family room is consists two bedrooms, with 
    interconnecting door, with two bathrooms, smart TVs , with one double and twin beds.`,
    mainAmenities: ["Smart TV", "Hair dryer", "Wi-Fi", "Safe", "Bottled water"],
    mainAmenitiesIcons: <FaRegCircleCheck />,
  },
];

// roomsImg.forEach((item, index) => {
//   if (index !== 0) {
//       item.deg = roomsImg[index - 1].deg + (360 / roomsImg.length);
//   } else {
//       item.deg = 360 / roomsImg.length;
//   }
//   console.log(item);
// });
