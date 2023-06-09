import React, { Component } from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import { mergeBreakpointsInOrder } from "@mui/system";
import Stack from "@mui/material/Stack";

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <h1 className="menuTitle">Selection</h1>
        <div>
          {MenuList.map((menuItem, value) => {
            return (
              <MenuItem
                name={menuItem.name}
                image={menuItem.image}
                info={menuItem.info}
                button={menuItem.button}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
