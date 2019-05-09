import React, { Component } from "react";

import TabContent from "./TabContent";

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.children[0].props.label
    };
  }

  onClickTab = tab => {
    this.setState({
      active: tab
    });
  };

  render() {
    let children = this.props.children;
    return (
      <div>
        <ul className="tab-list">
          {React.Children.map(children, child => {
            let { label } = child.props;
            return (
              <TabContent
                key={label}
                label={label}
                active={this.state.active}
                onClickTab={this.onClickTab}
              />
            );
          })}
        </ul>
        <div>
          {
            children.find(child => {
              return child.props.label === this.state.active;
            }).props.children
          }
        </div>
      </div>
    );
  }
}

export default Tab;
