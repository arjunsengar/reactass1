import React,{Component} from "react";
import "./ExternalCSS.css";

export class ClassComponent extends Component{
    render(){
       const inlineCSS = {
        color : "blue",
        fontSize: "20px"
    }

        return(
            <div id="divStyleClass">
                <h1>This is created using Class Component</h1>
                <p id="externalCSS">This is done using external CSS</p>
                <p style={inlineCSS}>This is done using inline CSS</p>
            </div>
        )
    }
}