import React from "react";

const TabContent = props => {
  return (
    <li
      onClick={() => props.onClickTab(props.label)}
      className={props.active === props.label ? "tab-active" : "tab-normal"}
    >
      {props.label}
    </li>
  );
};

export default TabContent;
