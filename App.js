import React from "react";
import  ReactDOM  from "react-dom/client";
const Heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Kaise Ho Bhaiya"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
//Passing A React Element inside The Root
root.render(Heading);
