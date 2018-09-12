import React from "react";
class DrumPad extends React.Component{
    constructor(props){
        super(props);

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.playSound = this.playSound.bind(this);
    }

    playSound(){
        const sound = document.getElementById(this.props.keyTrigger);
        console.log("sound");
        document.getElementById("display").innerHTML = this.props.id;
        sound.play();
    }
    componentDidMount(){
        document.addEventListener("keydown",this.handleKeyPress);
    }
    handleKeyPress(e){
        console.log(e.keyCode);
        if(e.keyCode === this.props.keyCode){

            this.playSound();
        }
    }
    render(){
        return(
            <button className="drum-pad" onClick={this.playSound}  id={this.props.id} >{this.props.keyTrigger}
                <audio className="clip" id={this.props.keyTrigger} src={this.props.url}/></button>
        );
    }
}
export default DrumPad;