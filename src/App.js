import React, { Component } from "react";
import Style from "./App.module.css";
import { FunctionalComponent } from "./FunctionalComponent";
import {ClassComponent} from "./ClassComponent";


class App extends Component{
    constructor(){
        super();
        this.state = {
            classClick : false,
            funcClick : false
        }
    }

    render(){
        console.log(this);
        return (
        <div>
            <h1 className = {Style.head}>Styling using Functional and Class Component</h1>
            <div className = {Style.button_container}>
                <button id={Style.button1} className = {Style.button} onClick = {() => this.setState({funcClick : !this.state.funcClick}) }>To see styling in functional component</button>
                <button id={Style.button2} className = {Style.button} onClick = {() => this.setState({classClick : !this.state.classClick})}>To see styling in class component</button>
            </div>
            <div Style="display: flex; width: 90vw; height: 76vh;">
            {this.state.funcClick ? <FunctionalComponent /> : null}
            {this.state.classClick ? <ClassComponent /> : null}
            </div>
        </div>
        )
}
}
export default App