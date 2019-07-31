import React from "react";
import "./SideBar.css";
import SubMenu from "../SubMenu/SubMenu"

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: null };
  }


  render() {
    const categories = Object.keys(this.props.categories);
    return (
      < div className="sidebar-container" >
        <div className="all-categories">ALL CATEGORIES</div>
        {
          categories.map((category, index) => {
            return (
              <div key={index}>
                <button id={category} className="button-category-name" onClick={() => { this.setState(state => ({ show: this.state.show === category ? null : category })); }}>
                  {category}
                </button>
                <div className="sub-menu">
                  {
                    this.state.show === category && <SubMenu categories={this.props.categories[category]} />
                  }
                </div>
              </div>
            );
          }) //end map
        }
      </div >
    );
  } // end render
};

export default SideBar;
