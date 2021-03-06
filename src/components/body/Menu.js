import React from "react";
// import { component } from "react";
import Dishes from "../../data/dishes";
import MenuItem from "./MenuItem";

class Menu extends React.Component {
  state = {
    dishes: Dishes,
  };
  render() {
    const menu = this.state.dishes.map((item) => {
      return <MenuItem dish={item} key={item.id} />;
    });
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">{menu}</div>
        </div>
      </div>
    );
  }
}

export default Menu;
