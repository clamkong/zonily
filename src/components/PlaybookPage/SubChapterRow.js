import React from "react";
import { Link } from "react-router-dom";

class SubChapterRow extends React.PureComponent {
  constructor(props) {
    super(props);
    this.subChapter = props.subChapter;
  }

  render() {
    return (
      <div className="subchapter-row">
        <Link to={`${this.props.match.url}/${this.subChapter.subChapterId}`}>
          <div className="subchapter-row__title">{this.subChapter.title}</div>
        </Link>
      </div>
    );
  }
}

export default SubChapterRow;
