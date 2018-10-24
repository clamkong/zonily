import React from "react";
import { Link } from "react-router-dom";

class SubChapterRow extends React.PureComponent {
  constructor(props) {
    super(props);
    this.subChapter = props.subChapter;
  }

  selectSubchapter() {
    console.log("subchapter selected", this.subChapter.title)
    this.props.onSubChapterSelected(this.subChapter);
  }

  render() {
    return <div className="subchapter-row">
        <Link to={`${this.props.match.url}/${this.subChapter.subChapterId}`}>
          <div className="subchapter-row__title" onClick={this.selectSubchapter.bind(this)}>
            {this.subChapter.title}
          </div>
        </Link>
      </div>;
  }
}

export default SubChapterRow;
