import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement =>Object => HTML(DOM)
const Heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Kaise Ho Bhaiya"
);

// Above Code in JSX
//JSX => React.createElement =>Object => HTML(DOM)
//Babel Understands JSX
//Babel comes along with parcel as dependency


//This Is a React Element
const Heading2 = (
  <h1 id="Hello" key="h2">
    Namaste React
  </h1>
);

//Functional Componenets
//Name Of Component should start with capital letter -- Good Practice
//
const HeaderComponent = () => {
  return (
    <>
      <div>
        <h1>Hello</h1>
        <h2>My Name is Aditya</h2>
      </div>
    </>
  );
};

//Another Way to write Arrow Function
const HeaderComponent2 = () => {
  <>
    <div>
      <h1>Hello</h1>
      <h2>My Name is Aditya</h2>
    </div>
  </>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//Passing A React Element inside The Root
root.render(<HeaderComponent/ >);
