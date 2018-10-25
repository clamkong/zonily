import React from "react";
import SectionRow from "./SectionRow";
import { Input } from "semantic-ui-react";
import { Link } from "react-router-dom";

class MasterPanel extends React.Component {
  constructor(props) {
    super(props);
    this.sections = props.sections;
    this.props.match;
  }
  
  render() {
    return (
      <div className="master-panel">
        <div className="master-panel__header">
          <button><Link className="go-back-link" to={`/playbook/${this.props.match.params.pId}`}>Back to Overview</Link></button>
        </div>
        <div className="master-panel__content">
          {this.sections.map(section => {
            return (
              <SectionRow
                match={this.props.match}
                onSubChapterSelected={this.props.onSubChapterSelected}
                section={section}
                key={section.sectionId}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
// <Input
//     fluid
//     className="playbook-page-content-search"
//     icon="search"
//     placeholder="Search for Playbook Content"
// />
export default MasterPanel;
