import React from "react";
import ContentComponentManager from "../../util/ContentComponentManager";

class ContentPanel extends React.Component {
  constructor(props) {
    super(props);
    this.manager = new ContentComponentManager(); //prob don't need this as instance
  }

  componentDidMount() {
    // const chapterId = this.props.match.params.cid;
    this.currentSubchapter = this.props.currentSubchapter;
  }

  render() {
    return (
      <div className="content-panel">
        <div className="content-panel--header">
          <h2>
            {this.props.currentSubchapter &&
              this.props.currentSubchapter.title}
          </h2>
        </div>
        <div className="content-panel--content">
          {this.manager.getComponent(
            this.props.currentSubchapter,
            this.props.onContentSelected
          )}
        </div>
      </div>
    );
  }
}

export default ContentPanel;
