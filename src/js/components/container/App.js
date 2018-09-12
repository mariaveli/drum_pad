import React, { Component } from "react";
import ReactDOM from "react-dom";
import DrumMachine from "../presentational/DrumMachine";
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            checked: true,
            disValue: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({
            checked: checked
        });
        let ButtonsArray =document.getElementsByClassName("drum-pad");
        for(let i=0; i<ButtonsArray.length; i++){
            ButtonsArray[i].disabled = !checked;
        }
        if(!checked){
            document.getElementById("display").innerHTML = "";
        }
    }

    render() {
        return (
            <div id="drum-machine">
                <DrumMachine />
                <div className="sideDrum">
                    <p>Power</p>
                    <div className="power-switch">
                        <Switch
                            onChange={this.handleChange}
                            checked={this.state.checked}
                            className="react-switch"
                            id="normal-switch"
                        />
                    </div>
                    <p id="display">
                        {this.state.disValue}
                    </p>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));


const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;