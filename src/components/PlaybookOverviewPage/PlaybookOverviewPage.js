import React from "react";
import AuthorDetails from "../AuthorDetails/AuthorDetails";
import ShoppingTile from "./ShoppingTile";
import "./PlaybookOverviewPage.css";
import allPlaybooks from "../../data/mock/allPlaybooks";
import { Link } from "react-router-dom";

export default class PlaybookDetailsPage extends React.Component {
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

    if (this.playbook === undefined) {
      throw `playbook with id ${pid} not found`;
    }
  }

  render() {
    return <div className="playbook-overview-page app-page">
        <div className="playbook-overview-page-content">
          <div className="playbook-overview-page-content-top">
            <div className="playbook-overview-page-hero">
              <div className="hero-container">
                <h1>{this.playbook.name}</h1>
                <p>Description of {this.playbook.name}</p>
              </div>
            </div>
            <div className="playbook-overview-page-right-panel">
              <div className="action-tile">
                <Link to={`/playbook/${this.playbook.id}/chapter/0`}>
                  <button>Go to Playbook</button>
                </Link>
              </div>
              <div className="playbook-overview-page-outline">
                <div className="outline-row">Chapter</div>
                <div className="outline-row">Chapter</div>
                <div className="outline-row">Chapter</div>
                <div className="outline-row">Chapter</div>
                <div className="outline-row">Chapter</div>
              </div>
            </div>
          </div>
          <div className="playbook-overview-page-content-bottom">
            <div className="playbook-overview-page-course-info">
              <h3>Playbook Info</h3>
            </div>
            <div className="playbook-overview-page-course-description">
              <h3>What you'll learn</h3>
              <p>lorum ipsum</p>
            </div>
          </div>
        </div>
      </div>;
  }
}

// <div className="playbook-overview-page-content">
//     <div className="playbook-title-info">
//         <h1>Playbook Title: {this.playbook.name}</h1>
//         <h3>Playbook gist</h3>
//         <h3>Playbook rating </h3>
//         <h3># of people who bought playbook</h3>
//         <h2>Created by John Smith</h2>
//         <h4>Language: English</h4>
//     </div>
//     <div className="video-section">Playbook intro video</div>
//     <div className="what-you-learn">
//         <h2>What will I learn?</h2>
//         <p>Blah blah blah</p>
//     </div>
//     <div className="playbook-outline">
//         <h2>Playbook Outline</h2>
//         <ul>
//             <li>Chapter 1</li>
//             <li>Chapter 2</li>
//             <li>Chapter 3</li>
//             <li>Chapter 4</li>
//         </ul>
//     </div>
//     <AuthorDetails />
//     {`this is the playbook overview page for page this for ${
//         this.props.match.params.pId
//         }`}
// </div>
//     <ShoppingTile />
