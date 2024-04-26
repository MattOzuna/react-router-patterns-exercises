import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Dogs from "./routes/Dogs";
import ErrorPage from "./error-page";
import defaultProps from "./defaultprops";
import Navbar from "./routes/Navbar";
import Color from "./routes/Color";
import ColorForm from "./components/ColorForm";
import ColorList from "./components/ColorList";

const router = createBrowserRouter([
  {
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <div>Hello!</div>,
      },
      {
        path: "/dogs",
        element: (
          <Dogs
            dogs={defaultProps.dogs}
            names={defaultProps.dogs.map((dog) => dog.name.toLocaleLowerCase())}
          />
        ),
      },
      {
        path: "/dogs/:pup",
        element: <Dogs />,
      },

      {
        path: "/colors",
        element: <ColorList />,
      },
      {
        path: "/colors/form",
        element: <ColorForm />,
      },
      {
        path: "/colors/:color",
        element: <Color />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
