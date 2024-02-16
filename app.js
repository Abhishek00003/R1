/*

const heading = React.createElement("h1",{id:"heading", xyz:"abc"},"Holy FR");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); 
*/



//Create a DOM tree(example) using REACT
/*
    <div id="parent">
         <div id="child">
           <h1> heading 1 tag </h1>
           <h2> heading 2 tag </h2>
         </div>
    </div>
*/
const parent = React.createElement("div",
{id:"parent"},React.createElement("div",{id:"child"},
[React.createElement("h1",{id:"heading"},"child's heading"), React.createElement("h2",{id:"heading2"},"heading 2")])
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);