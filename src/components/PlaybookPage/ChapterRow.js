import React from "react";
import SubChapterRow from "./SubChapterRow";

class ChapterRow extends React.PureComponent {
  constructor(props) {
    super(props);
    this.chapter = props.chapter;
  }

  render() {
    return (
      <div className="chapter-row">
        <div className="chapter-row__title">
          <div>{this.chapter.title}</div>
        </div>
        {this.chapter.subChapters.map(subChapter => {
          return (
            <SubChapterRow
              key={subChapter.subChapterId}
              onSubChapterSelected={this.props.onSubChapterSelected}
              subChapter={subChapter}
              match={this.props.match}
            />
          );
        })}
      </div>
    );
  }
}

export default ChapterRow;
