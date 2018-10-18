import React from "react";
import allPlaybooks from "../../data/mock/allPlaybooks";
import { Input } from "semantic-ui-react";
import "./PlaybookPage.css";
import { Route } from "react-router-dom";
import TextComponent from "./PlaybookPageContentComponents/TextComponent";
import Link from "react-router-dom/Link";
// import FlowComponent from "./FlowComponent/FlowComponent";
// import PieComponent from "./PlaybookPageContentComponents/PieComponent/PieComponent";
import FarmhousePlaybook from "../../data/Farmhouse/MasterPayload";
import ContentComponentManager from "../../util/ContentComponentManager";

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
      detailId: undefined
    };
  }

  onChapterClick(chapter) {
    this.setState({ currentChapter: chapter });
  }

  onSubChapterClick(subchapter){
    this.setState({ currentSubchapter: subchapter });
  }

  onContentSelect(id) {
    console.log("content selected");
    this.setState({ detailId: id });
  }

  render() {
    return <div className="playbook-page app-page">
        <div className="playbook-page-content">
          <div className="master-panel">
            <div className="master-panel--header">
              <Input fluid className="playbook-page-content-search" icon="search" placeholder="Search for Playbook Content" />
            </div>
            <div className="master-panel--content">
              {FarmhousePlaybook.sections.map(section => {
                return <div className="section-row">
                    <div className="section-row__title">
                      <div>{section.sectionTitle}</div>
                    </div>
                    {section.chapters.map(chapter => {
                      return <div className="chapter-row">
                          <div className="chapter-row__title">
                            <div>{chapter.title}</div>
                          </div>
                          {chapter.subChapters.map(subChapter => {
                            return <div className="subchapter-row">
                                <Link key={subChapter.subChapterId} to={`${this.props.match.url}/${subChapter.subChapterId}`}>
                                  <div onClick={this.onSubChapterClick.bind(this, subChapter)} className="subchapter-row__title">
                                    {subChapter.title}
                                  </div>
                                </Link>
                              </div>;
                          })}
                        </div>;
                    })}
                  </div>;
              })}
            </div>
          </div>
          <div className="content-panel">
            <div className="content-panel--header">
              <h2>
                {this.state.currentSubchapter.title}
              </h2>
            </div>
            <div className="content-panel--content">
              <Route path={`${this.props.match.path}/:cid`} render={() => {
                  const manager = new ContentComponentManager(); //prob don't need this as instance
                  return manager.getComponent(this.state.currentSubchapter);
                  // return <FlowComponent onSliceClicked={this.onContentSelect.bind(this)} />;
                  // return "content panel";
                }} />
            </div>
          </div>
          <div className="details-panel">
            <div className="details-panel--header">
              <h2>Detail Title</h2>
            </div>
            <div className="details-panel--content">{"Heylo"}</div>
          </div>
        </div>
      </div>;
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
