{/* <div id="parent">
    <div id="child">
        <h1></h1>
        <h2></h2>
    </div>
</div> */}





const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child" },
      [
        React.createElement("h1", { key: "child-h1" }, "I am h1 tag"),
        React.createElement("h2", { key: "child-h2" }, "I am h2 tag")
      ]
    ),
    React.createElement(
      "div",
      { id: "child2" },
      [
        React.createElement("h1", { key: "child2-h1" }, "I am h1 tag"),
        React.createElement("h2", { key: "child 2-h2" }, "I am h2 tag")
      ]
    )
  ]
);

const root=ReactDOM.createRoot(document.getElementById('root'));
const heading=React.createElement(
    "h1",
    {id:"heading",style:{color:"red"}
    },
    "Hello World fron React"
);
// console.log(heading); //object

root.render(parent);//this render method converts and put it into h1  tag

