import React from 'react'
import { Modal, Button } from 'react-materialize';

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
/*
  <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li id="trashIcon" style={ {cursor: "pointer", fontSize: "35pt"}} 
                onClick={this.handleDeleteLogo}>
                &#128465;
            </li>
          </ul>
*/
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div  className='brand-logo' 
                style={ {cursor: "pointer", paddingLeft: "5pt"} }
                onClick={this.handleGoHome}>
            goLogoLo Home
          </div>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <Modal
                actions={[
                <Button flat modal="confirm" node="button" waves="green" onClick={this.handleDeleteLogo} >Yes</Button>,
                <Button flat modal="close" node="button" waves="green">No</Button>
                ]}
                bottomSheet={false}
                fixedFooter={false}
                header="Are you sure you want to delete this logo?"
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
              trigger={<Button node="button" style={{fontSize: "35pt", backgroundColor: "#EE6E73", boxShadow: "none"}}>&#128465;</Button>}>
              <p>This logo will not be retrievable once deleted.</p>
            </Modal>
            </ul>
        </div>
      </nav>
    )
  };
}

export default Navbar;