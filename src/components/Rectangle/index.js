import React from "react";

class Rectangle extends React.Component {

  render() {
    return (
      <div
        className="rectangle"
        style={{ borderBottomColor: this.props.color }}>

      </div>
    )
  }
}

export default Rectangle;