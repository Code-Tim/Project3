import React from "react";
import PropTypes from "prop-types";

class PlayerSetup extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      console.log("do not show modal");
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "red",
      padding: 50,
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: "#fff",
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: "0 auto",
      padding: 30,
    };
    if (this.props.show) {
      console.log(" show modal");
      return (
        // <div className="backdrop" style={{ backdropStyle }}>
        //   <div className="modal" style={{ modalStyle }}>
        //     {this.props.children}

        //     <div className="footer">
        //       <button onClick={this.props.onClose}>Close</button>
        //     </div>
        //   </div>
        // </div>
        <div className="modal display-block">
          <section className="modal-main">
            {this.props.children}
            <button onClick={this.props.onClose}>close</button>
          </section>
        </div>
      );
    }
    return null;
  }
}

PlayerSetup.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
};

export default PlayerSetup;
