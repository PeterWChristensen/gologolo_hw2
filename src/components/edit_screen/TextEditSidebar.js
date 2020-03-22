import React, { Component } from 'react'
import { Modal, Button } from 'react-materialize';

class TextEditSidebar extends Component {
    constructor(props) {
        super(props);

        
        // WE'LL MANAGE THE UI CONTROL
        // VALUES HERE
        this.state = {
            text : this.props.logo.text,
            textColor : this.props.logo.textColor,
            fontSize : this.props.logo.fontSize,
            backgroundColor : this.props.logo.backgroundColor,
            borderColor : this.props.logo.borderColor,
            borderRadius : this.props.logo.borderRadius,
            borderThickness : this.props.logo.borderThickness,
            borderStyle : "solid",
            padding : this.props.logo.padding,
            margin : this.props.logo.margin
            
        }

    }

    updateState = () => {
        this.setState({
        text : this.props.logo.text,
        textColor : this.props.logo.textColor,
        fontSize : this.props.logo.fontSize,
        backgroundColor : this.props.logo.backgroundColor,
        borderColor : this.props.logo.borderColor,
        borderRadius : this.props.logo.borderRadius,
        borderThickness : this.props.logo.borderThickness,
        borderStyle : "solid",
        padding : this.props.logo.padding,
        margin : this.props.logo.margin
        });
}
    
    componentDidUpdate = (prevProps) =>  {
        console.log("\tTextEditSidebar did update")
        if (this.props.logo !== prevProps.logo) {
            this.updateState();
          }
    }
    

    handleUndo = () => {
        console.log(this.props.logo);
        this.props.undoCallback();
        console.log(this.props.logo);   
    }

    handleRedo = () => {
        this.props.redoCallback();
    }

    handleTextChange = (event) => {
        console.log("handleTextChange to " + event.target.value);
        this.setState({ text: event.target.value});
    }

    handleTextColorChange = (event) => {
        console.log("handleTextColorChange to " + event.target.value);
        this.setState({ textColor: event.target.value }, this.completeUserEditing);
    }

    handleFontSizeChange = (event) => {
        console.log("handleFontSizeChangeComplete to " + event.target.value);
        this.setState({ fontSize: event.target.value }, this.completeUserEditing);
    }

    handleBackgroundColorChange = (event) => {
        console.log("handleBackgroundColorChange to " + event.target.value);
        this.setState({ backgroundColor: event.target.value }, this.completeUserEditing);
    }

    handleBorderColorChange = (event) => {
        console.log("handleBorderColorChangeComplete to " + event.target.value);
        this.setState({ borderColor: event.target.value }, this.completeUserEditing);
    }

    handleBorderRadiusChange = (event) => {
        console.log("handleBorderRadiusChangeComplete to " + event.target.value);
        this.setState({ borderRadius: event.target.value }, this.completeUserEditing);
    }

    handleBorderThicknessChange = (event) => {
        console.log("handleBorderThickessChangeComplete to " + event.target.value);
        this.setState({ borderThickness: event.target.value }, this.completeUserEditing);
    }

    handlePaddingChange = (event) => {
        console.log("handlePaddingChangeComplete to " + event.target.value);
        this.setState({ padding: event.target.value }, this.completeUserEditing);
    }

    handleMarginChange = (event) => {
        console.log("handleMarginChangeComplete to " + event.target.value);
        this.setState({ margin: event.target.value }, this.completeUserEditing);
    }

    completeUserEditing = () => {
        console.log("completeUserEditing");
        console.log("this.state.textColor: " + this.state.textColor);
        this.props.changeLogoCallback(this.props.logo, this.props.logo.key, this.state.text, this.state.textColor,
                                      this.state.fontSize, this.state.backgroundColor, this.state.borderColor, this.state.borderRadius, 
                                      this.state.borderThickness, this.state.padding, this.state.margin);
    }

    render() {
        let undoDisabled = !this.props.canUndo();
        let redoDisabled = !this.props.canRedo();
        let undoClass = "waves-effect waves-light btn-small";
        let redoClass = "waves-effect waves-light btn-small";

        if (undoDisabled)
            undoClass += " disabled";
        if (redoDisabled)
            redoClass += " disabled";
        return (
            <div className="card-panel col s4">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <Modal
                            actions={[
                            <Button flat modal="close" node="button" waves="green" onClick={this.completeUserEditing}>Confirm</Button>,
                            <Button flat modal="close" node="button" waves="green">Cancel</Button>
                            ]}
                            bottomSheet={false}
                            fixedFooter={false}
                            header="Enter Logo Text"
                            id="modal-0"
                            options={{
                            dismissible: true,
                            endingTop: '10%',
                            inDuration: 250,
                            onCloseEnd: null,
                            onCloseStart: null,
                            onOpenEnd: null,
                            onOpenStart: null,
                            opacity: 0.5,
                            outDuration: 250,
                            preventScrolling: true,
                            startingTop: '4%'
                            }}  
                            trigger={<Button node="button" style={{fontSize: "20pt", backgroundColor: "#26A69A"}}>&#9998;</Button>}>
                            <input type="text" value={this.state.text}
                                    onChange={this.handleTextChange}/>
                        </Modal>
                        <button className={undoClass} onClick={this.handleUndo}>Undo</button>
                        <button className={redoClass} onClick={this.handleRedo}>Redo</button>
                    </div>
                </div>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title"></span>
                        <div className="row">
                            <div className="col s4">Text Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleTextColorChange}
                                        value={this.props.logo.textColor}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Font Size:</div>
                            <div className="col s8">
                                <div style={{textAlign: "center"}}> {this.props.logo.fontSize} </div>
                                <input type="range" min="10" max="150" 
                                    onChange={this.handleFontSizeChange}
                                    value={this.props.logo.fontSize} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Background Color:</div>
                            <div className="col s8">
                                <input type="color" 
                                    onChange={this.handleBackgroundColorChange}
                                    value={this.props.logo.backgroundColor} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Color:</div>
                            <div className="col s8">
                                <input type="color" 
                                    onChange={this.handleBorderColorChange}
                                    value={this.props.logo.borderColor} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Radius:</div>
                            <div className="col s8">
                                <div style={{textAlign: "center"}}> {this.props.logo.borderRadius} </div>
                                <input type="range" min="1" max="100" 
                                    onChange={this.handleBorderRadiusChange}
                                    value={this.props.logo.borderRadius} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Thickness:</div>
                            <div className="col s8">
                                <div style={{textAlign: "center"}}> {this.props.logo.borderThickness} </div>
                                <input type="range" min="0" max="100" 
                                    onChange={this.handleBorderThicknessChange}
                                    value={this.props.logo.borderThickness} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Padding:</div>
                            <div className="col s8">
                                <div style={{textAlign: "center"}}> {this.props.logo.padding} </div>
                                <input type="range" min="0" max="100" 
                                    onChange={this.handlePaddingChange}
                                    value={this.props.logo.padding} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Margin:</div>
                            <div className="col s8">
                                <div style={{textAlign: "center"}}> {this.props.logo.margin} </div>
                                <input type="range" min="0" max="50" 
                                    onChange={this.handleMarginChange}
                                    value={this.props.logo.margin} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextEditSidebar