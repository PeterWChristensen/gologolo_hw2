import React, { Component } from 'react'

// THIS IS HOW WE DISPLAY THE LOGO, IN THIS COMPONENT
class TextEditWorkspace extends Component {
    render() {
        const styles = {
            container: {
                color: this.props.logo.textColor,
                fontSize: this.props.logo.fontSize + "pt",
                backgroundColor: this.props.logo.backgroundColor,
                borderColor: this.props.logo.borderColor,
                borderRadius: this.props.logo.borderRadius + "px",
                borderWidth: this.props.logo.borderThickness + "px",
                borderStyle: "solid",
                padding: this.props.logo.padding + "px",
                margin: this.props.logo.margin + "px",
                overflow: "auto",
                position: "fixed",
            }
        }
        return (
            <div className="col s8" style={{overflow: "auto"}}>
                <div style={ styles.container }>
                {this.props.logo.text}
                </div>
            </div>
        )
    }
}

export default TextEditWorkspace