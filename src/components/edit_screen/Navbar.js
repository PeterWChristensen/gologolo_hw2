import React from 'react'

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    console.log("Navbar constructed");
  }

  componentDidMount = () => {
      console.log("\tNavbar component did mount");
  }

  componentWillUnmount = () => {
      console.log("\tNavbar component will unmount");
  }

  handleGoHome = () => {
    console.log("handleGoHome");
    this.props.goToHomeCallback();
  }

  handleDeleteLogo = () => {
    console.log("handleDeleteLogo");
    this.props.deleteLogoCallback(this.props.logo.key);
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div  className='brand-logo' 
                style={ {cursor: "pointer", paddingLeft: "5pt"} }
                onClick={this.handleGoHome}>
            goLogoLo
          </div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li style={ {cursor: "pointer", fontSize: "35pt"}} 
                onClick={this.handleDeleteLogo}>
                &#128465;</li>
          </ul>
        </div>
      </nav>
    )
  };
}

export default Navbar;