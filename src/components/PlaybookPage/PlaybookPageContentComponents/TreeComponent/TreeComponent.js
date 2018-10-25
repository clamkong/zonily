import React from "react";
import OrgChart from "react-orgchart";
import "react-orgchart/index.css";
import "./TreeComponent.css";

class TreeComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  onTreeNodeClicked(node) {
    this.props.onContentSelected(
      node.details,
      node.name
    );
  }

  render() {
    const TreeNode = ({ node }) => {
      return (
        <div className="tree-node" onClick={this.onTreeNodeClicked.bind(this, node)}>
          {node.name}
        </div>
      );
    };

    return (
      <div className="tree-component">
        <OrgChart tree={this.props.data} NodeComponent={TreeNode} />
      </div>
    );
  }
}

export default TreeComponent;
