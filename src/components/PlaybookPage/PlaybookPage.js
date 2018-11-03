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

    const getFirstSubchapter = () => {
      const firstSection = FarmhousePlaybook.sections[0];
      const firstChapter = firstSection.chapters[0];
      const firstSubChapter = firstChapter.subChapters[0];

      return firstSubChapter || {};
    };

    this.state = {
      currentChapter: 0,
      currentSubchapter: getFirstSubchapter(),
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

  onContentSelected(details = [], detailTitle) {
    console.log("content selected");
    this.setState({ detailData: details });
    this.setState({ detailTitle: detailTitle });
  }

  onSubChapterSelected(subchapter) {
    this.setState({ currentSubchapter: subchapter });
    this.setState({ detailData: [], detailTitle: "" });
  }
  // <img className="playbook-card-header--image" src={this.playbook.image} />
  //                   <div className="playbook-page-header">
  //   {this.playbook.name}
  // </div>
  render() {
    /**
     * Get's either a nested list, or flat list based on data coming in
     * @param {Object or String} data - If object, than nest, else flat
     * @param {Number} index - for collection key
     */
    const getDetailList = (data, index) => {
      if (data.title) {
        return (
          <li key={index}>
            {data.title}
            {data.children &&
              data.children.length > 0 && (
                <ul>
                  {data.children.map((child, index) => {
                    return <li key={index}>{child}</li>;
                  })}
                </ul>
              )}
          </li>
        );
      }

      return <li key={index}>{data}</li>;
    };
    return (
      <div className="playbook-page">
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
            <div className="details-panel__header">
              <h2>{this.state.detailTitle}</h2>
            </div>
            <div className="details-panel__content">
              {this.state.detailData.length == 0 ? (
                <p>Select an item to see more details</p>
              ) : (
                <ul>
                  {this.state.detailData.map((data, index) => {
                    return getDetailList(data, index);
                  })}
                </ul>
              )}
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
