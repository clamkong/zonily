import React from "react";
import "../../../../styles/components/StackComponent.css";

class StackComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="stack-component">
        {this.props.data.map((item, index) => {
          return (
            <StackColumn
              onContentSelected={this.props.onContentSelected}
              key={index}
              item={item}
            />
          );
        })}
      </div>
    );
  }
}

export default StackComponent;

class StackColumn extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  onStackColumnClick() {
    this.props.onContentSelected(
      this.props.item.details,
      this.props.item.title
    );
  }

  render() {
    return (
      <div
        className="stack-column"
        onClick={this.onStackColumnClick.bind(this)}
      >
        <div className="stack-column__title">{this.props.item.title}</div>
        <div className="stack-column__content">
          <ul>
            {this.props.item.content.map((contentItem, index) => {
              return <li key={index}>{contentItem}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
