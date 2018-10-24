import React from "react";
import allPlaybooks from "../../data/mock/allPlaybooks";

import "./PlaybookPage.css";

import FarmhousePlaybook from "../../data/Farmhouse/MasterPayload";

import MasterPanel from "./MasterPanel";
import ContentPanel from "./ContentPanel";

import { Route } from "react-router-dom";

class PlaybookPage extends React.Component {
  constructor(props) {
    super(props);

    this.playbook = undefined;
    const pid = this.props.match.params.pId;
    for (let i = 0; i < allPlaybooks.length; i++) {
      if (allPlaybooks[i].id == pid) {
        this.playbook = allPlaybooks[i];
        break;
      }
    }

    this.state = {
      currentChapter: 0,
      currentSubchapter: {},
      detailData: [],
      detailTitle: ""
    };
  }

  onChapterClick(chapter) {
    this.setState({ currentChapter: chapter });
  }

  onContentSelect(id) {
    console.log("content selected");
    this.setState({ detailId: id });
  }

  onContentSelected(details, detailTitle) {
    console.log("content selected");
    this.setState({ detailData: details });
    this.setState({ detailTitle: detailTitle });
  }

  onSubChapterSelected(subchapter) {
    this.setState({ currentSubchapter: subchapter });
    this.setState({ detailData: [], detailTitle: ""})
  }

  render() {
    return (
      <div className="playbook-page app-page">
        <div className="playbook-page-content">
          <MasterPanel
            match={this.props.match}
            sections={FarmhousePlaybook.sections}
            onSubChapterSelected={this.onSubChapterSelected.bind(this)}
          />
          <ContentPanel
            currentSubchapter={this.state.currentSubchapter}
            onContentSelected={this.onContentSelected.bind(this)}
          />
          <div className="details-panel">
            <div className="details-panel--header">
              <h2>{this.state.detailTitle}</h2>
            </div>
            <div className="details-panel--content">
              <ul>
                {this.state.detailData.map((data, index) => {
                  return <li key={index}>{data}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaybookPage;

// {
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
//     (el, i) => {
//       return (
//         <Link key={i} to={`${this.props.match.url}/${i}`}>
//           <div
//             onClick={this.onChapterClick.bind(this, i)}
//             className="chapter-row"
//           >
//             {i == 0 ? "Introduction" : `Chapter ${i}`}
//           </div>
//         </Link>
//       );
//     }
//   )
// }

// <Route
//   path={`${this.props.match.path}/:cid`}
//   render={({ match }) => {
//     return (
//       <ContentPanel
//         match={match}
//         currentSubchapter={this.state.currentSubchapter}
//         onContentSelected={this.onContentSelected}
//       />
//     );
//   }}
// />
