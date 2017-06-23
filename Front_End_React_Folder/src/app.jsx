import React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component // definition of the class App
{
    render()
    { return(
        <p>Hello World</p>
    );
    }
}

var app = <App/>;
console.log(app);
var node = document.getElementById("app");
console.log(node);
ReactDOM.render(app, node);
