import React from "react";
import "../../../../styles/components/GridComponent.css";

class GridComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="grid-component">
        {this.props.data.map((item, index) => {
          return (
            <GridItem
              key={index}
              onContentSelected={this.props.onContentSelected}
              item={item}
            />
          );
        })}
      </div>
    );
  }
}

export default GridComponent;

class GridItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  onGridItemClicked() {
    this.props.onContentSelected(
      this.props.item.details,
      this.props.item.title
    );
  }

  render() {
    return (
      <div className="grid-item" onClick={this.onGridItemClicked.bind(this)}>
        {this.props.item.title}
      </div>
    );
  }
}
