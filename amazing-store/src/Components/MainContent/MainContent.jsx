import React from "react";
import SideBar from "./SideBar/SideBar";

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: {
        face: [
          "Creams & gels",
          "Patches",
          "Emulsions",
          "Toners",
          "Face cleansing",
          "Make up removal",
          "Scrubs",
          "Peeling",
          "Masks"
        ],
        body: ["body1", "body2", "body3"],
        foot: ["foot1", "foot2", "foot3"],
        hands: ["hands1", "hands2", "hands3"],
        hair: ["hair1", "hair2", "hair3"],
        makeup: ["makeup1", "makeup2", "makeup3"]
      }
    };
  }
  render() {
    return (
      <>
        <div>MainContent</div>
        <SideBar categories={this.state.categories} />
      </>
    );
  }
}

export default MainContent;
