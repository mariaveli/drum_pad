import React from "react";
import DrumPad from "./DrumPad";
import One from "./sounds";
class DrumMachine extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className = "drum-pads">
                {One.map(obj => <DrumPad keyTrigger={obj.keyTrigger}  url={obj.url} keyCode={obj.keyCode} id={obj.id}/>)}
            </div>

        );}
}
export default  DrumMachine;