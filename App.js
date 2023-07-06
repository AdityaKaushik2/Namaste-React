import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement =>Object => HTML(DOM)
// const Heading = React.createElement(
//   "h1",
//   {
//     id: "title",
//   },
//   "Kaise Ho Bhaiya"
// );

// Above Code in JSX
//JSX => React.createElement =>Object => HTML(DOM)
//Babel Understands JSX
//Babel comes along with parcel as dependency


//This Is a React Element
// const Heading2 = (
//   <h1 id="Hello" key="h2">
//     Namaste React
//   </h1>
// );

//Functional Componenets
//Name Of Component should start with capital letter -- Good Practice
//
// const HeaderComponent = () => {
//   return (
//     <>
//       <div>
//         <h1>Hello</h1>
//         <h2>My Name is Aditya</h2>
//       </div>
//     </>
//   );
// };

//Another Way to write Arrow Function
// const HeaderComponent2 = () => {
//   <>
//     <div>
//       <h1>Hello</h1>
//       <h2>My Name is Aditya</h2>
//     </div>
//   </>;
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
//Passing A React Element inside The Root
// root.render(<HeaderComponent/ >);


// Assignment 4 Solutions
// Q1 -Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)

const Header = React.createElement(
  "div",
  {
    id: "container",
  },
  React.createElement("h1",{class : "as"},"1st Header"),
  React.createElement("h2",{class : "titasle"},"2nd Header"),
  React.createElement("h3",{class : "titlsde"},"3rd Header")
);

const root = ReactDOM.createRoot(document.getElementById("title"));
// root.render(Header);

//Same Element Using JSX
const HeaderComponent = () => {
  return (
    <>
      <div>
        <h1 style={{color: "red"}}>Hello</h1>
        <h2>My Name is Aditya</h2>
        <h3>My Name is Aditya Kaushik</h3>
      </div>
    </>
  );
};
const HeaderComponent2 = () => {
  return (
    <>
      <div>
        <HeaderComponent/>
        <h1 style={{color: "blue"}}>Hello</h1>
        <h2>My Name is Aditya</h2>
        <h3>My Name is Aditya Kaushik</h3>
      </div>
    </>
  );
};


root.render(<HeaderComponent2/>);
