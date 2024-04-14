const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [
        React.createElement("h1", {id: "h1"}, "I am H1 tag"),
        React.createElement("h2", {id : "h2"}, "I am H2 tag")

    ]
  )
);
console.log(parent);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);