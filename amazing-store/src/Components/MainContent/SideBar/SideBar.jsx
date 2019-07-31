import React from "react";
import "./SideBar.css";


class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: null };
  }


  render() {

    const categories = Object.keys(this.props.categories);

    console.log(categories);
    const showSubMenu = (categories) => {
      return categories.map((item, index) => <li key={index}>{item}</li>)
    }

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
                    this.state.show === category && showSubMenu(this.props.categories[category])
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
