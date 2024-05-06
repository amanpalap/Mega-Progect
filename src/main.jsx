import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import {
  About,
  Body,
  CulturalSocieties,
  Exam,
  SocietiesHome,
  Sports,
  Goonj,
  Taal,
  Euphony,
  Renaissance,
  Horizon,
  Footprints,
  Verve,
  Vecell,
  BDCOE,
  BRL,
  Conatus,
  CSI,
  GDSC,
  ISTE,
  Nirmaan,
  OORJA,
  OSS,
  Phoenix,
  Robo,
  SAE,
  Samveg,
  SI,
  Speed,
  BB,
  CC,
  FC,
  TT,
  BAD,
  KAB,
  KHO,
  VB,
  Athelete,
  Iyear,
  IIyear,
  IIIyear,
  IVyear
} from "./components/index.js";
import TechnicalSocieties from "./components/Societies/TechnicalSocieties.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Body />,
      },
      {
        path: "Societies",
        element: <SocietiesHome />,
      },
      {
        path: "CulturalSocieties",
        element: <CulturalSocieties />,
      },
      {
        path: "Taal",
        element: <Taal />,
      },
      {
        path: "Goonj",
        element: <Goonj />,
      },
      {
        path: "Verve",
        element: <Verve />,
      },
      {
        path: "Horizon",
        element: <Horizon />,
      },
      {
        path: "Footprints",
        element: <Footprints />,
      },
      {
        path: "Renaissance",
        element: <Renaissance />,
      },
      {
        path: "Vecell",
        element: <Vecell />,
      },
      {
        path: "Euphony",
        element: <Euphony />,
      },
      {
        path: "TechnicalSocieties",
        element: <TechnicalSocieties />,
      },
      {
        path: "BDCOE",
        element: <BDCOE />,
      },
      {
        path: "BRL",
        element: <BRL />,
      },
      {
        path: "Conatus",
        element: <Conatus />,
      },
      {
        path: "CSI",
        element: <CSI />,
      },
      {
        path: "GDSC",
        element: <GDSC />,
      },
      {
        path: "ISTE",
        element: <ISTE/>,
      },
      {
        path: "Nirmaan",
        element: <Nirmaan />,
      },
      {
        path: "OSS",
        element: <OSS/>,
      },
      {
        path: "OORJA",
        element: <OORJA />,
      },
      {
        path: "Phoenix",
        element: <Phoenix />,
      },
      {
        path: "Robo",
        element: <Robo/>,
      },
      {
        path: "SAE",
        element: <SAE />,
      },
      {
        path: "Samveg",
        element: <Samveg/>,
      },
      {
        path: "SI",
        element: <SI/>,
      },
      {
        path: "Speed",
        element: <Speed />,
      },
      {
        path: "Sports",
        element: <Sports />,
      },
      {
        path: "BB",
        element: <BB />,
      },
      {
        path: "CC",
        element: <CC />,
      },
      {
        path: "VB",
        element: <VB/>,
      },
      {
        path: "BAD",
        element: <BAD />,
      },
      {
        path: "TT",
        element: <TT/>,
      },
      {
        path: "KHO",
        element: <KHO/>,
      },
      {
        path: "KAB",
        element: <KAB />,
      },
      {
        path: "FC",
        element: <FC />,
      },
      {
        path: "Athelete",
        element: <Athelete />,
      },
      {
        path: "Exam",
        element: <Exam />,
      },
      {
        path: "2year",
        element: <IIyear />,
      },
      {
        path: "3year",
        element: <IIIyear />,
      },
      {
        path: "4year",
        element: <IVyear />,
      },
      {
        path: "1year",
        element: <Iyear />,
      },
      {
        path: "About-Us",
        element: <About />,
      },
    ],
  },
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Routes path="/" element={<App />}>
//       <Route path="" element={<Body />} />
//       <Route path="/Societies" element={<SocietiesHome />}>
//         <Route path="CulturalSocieties" element={<CulturalSocieties/>}/>
//         </Route>
//     </Routes>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
