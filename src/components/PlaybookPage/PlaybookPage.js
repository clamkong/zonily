import React from "react";
import allPlaybooks from "../../data/mock/allPlaybooks";
import { Input } from "semantic-ui-react";
import "./PlaybookPage.css";
import { Route } from "react-router-dom";
import TextComponent from "./PlaybookPageContentComponents/TextComponent";
import Link from "react-router-dom/Link";
import GridContainer from '../Grid/GridContainer'
import StackContainer from '../Stack/StackContainer'

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
      currentChapter: 0
    };
  }

  onChapterClick(chapter) {
    this.setState({ currentChapter: chapter });
  }

  render() {
    return (
      <div className="playbook-page app-page">
        <div className="playbook-page-content">
          <div className="master-panel">
            <div className="master-panel--header">
              <Input
                fluid
                className="playbook-page-content-search"
                icon="search"
                placeholder="Search for Playbook Content"
              />
            </div>
            <div className="master-panel--content">
              {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
                (el, i) => {
                  return (
                    <Link key={i} to={`${this.props.match.url}/${i}`}>
                      <div
                        onClick={this.onChapterClick.bind(this, i)}
                        className="chapter-row"
                      >
                        {i == 0 ? "Introduction" : `Chapter ${i}`}
                      </div>
                    </Link>
                  );
                }
              )}
            </div>
          </div>
          <div className="content-panel">
            <div className="content-panel--header">
              <h2>
                {this.state.currentChapter == 0
                  ? "Introduction"
                  : `Chapter ${this.state.currentChapter} : Subtitle`}
              </h2>
            </div>
            <div className="content-panel--content">
              <Route
                path={`${this.props.match.path}/:cid`}
                component={StackContainer}
              />
            </div>
          </div>
          <div className="details-panel">
            <div className="details-panel--header">
              <h2>Detail Title</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaybookPage;
