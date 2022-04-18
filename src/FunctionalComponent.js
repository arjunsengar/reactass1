import React from "react";
import "./ExternalCSS.css"

export const FunctionalComponent = () => {

    const inlineCSS = {
        color : "blue",
        fontSize: "20px"
    }

    return(
        <div id="divStyle">
                <h1>This is created using functional Component</h1>
                <p id="externalCSS">This is done using external CSS</p>
                <p style={inlineCSS}>This is done using inline CSS</p>
        </div>
    )
}