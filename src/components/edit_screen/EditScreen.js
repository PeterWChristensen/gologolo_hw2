// IMPORT ALL THE THINGS NEEDED FROM OTHER JAVASCRIPT SOURCE FILES
import React, { Component } from 'react'
import Navbar from './Navbar.js'
import TextEditSidebar from './TextEditSidebar.js'
import TextEditWorkspace from './TextEditWorkspace.js'

export class EditScreen extends Component {
    constructor(props) {
        super(props);

        // DISPLAY WHERE WE ARE
        console.log("\tEditScreen constructor");

        this.state = {  
            logo: this.props.logo,
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

    handleKeyPress = (event) => {
        console.log("key pressed");
        if (event.keyCode == 90 && event.ctrlKey) {
            this.props.undoCallback();
            this.forceUpdate();
        }
        else if (event.keyCode ==89 && event.ctrlKey) {
            this.props.redoCallback();
            this.forceUpdate();
        }

    }

    componentDidMount = () => {
        console.log("\tEditScreen component did mount");
        document.addEventListener("keyup", this.handleKeyPress, false);
    }

    componentWillUnmount = () => {
        console.log("\tEditScreen component will unmount");
        document.removeEventListener("keyup", this.handleKeyPress, false);
    }

    updateState = () => {
            this.setState({
                logo: this.props.logo
            });
    }

    componentDidUpdate = (prevProps) =>  {
        console.log("\tEditScreen did update")
        if (this.props.logo !== prevProps.logo) {
            this.updateState();
          }
    }

    render() {
        // DISPLAY WHERE WE ARE
        console.log("\tEditScreen render");
       
        return (
            <div className="container">
                <Navbar goToHomeCallback={this.props.goToHomeCallback} 
                        deleteLogoCallback={this.props.deleteLogoCallback}
                        logo={this.props.logo} />
                <div className="row">
                    <TextEditSidebar
                        logo={this.props.logo}
                        changeLogoCallback={this.props.changeLogoCallback}
                        undoCallback={this.props.undoCallback}
                        redoCallback={this.props.redoCallback}    
                        deleteLogoCallback={this.props.deleteLogoCallback}                                      
                        canUndo={this.props.canUndo} 
                        canRedo={this.props.canRedo}                        
                    />
                    <TextEditWorkspace
                        logo={this.props.logo} />
                </div>
            </div>
        )
    }
}

export default EditScreen