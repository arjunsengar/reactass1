import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const NewApp = () => {
    return (
        <div>
            <App />
        </div>
    )
}

ReactDOM.render(
    <NewApp />,
    document.querySelector("#root")
);