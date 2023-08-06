import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Newcontact from "./routes/newContact.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyContact from "./routes/Mycontact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/mycontact",
        element: <MyContact />,
      },
      {
        path: "/newContact",
        element: <Newcontact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
