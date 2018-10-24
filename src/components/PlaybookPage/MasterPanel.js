import React from "react";
import SectionRow from "./SectionRow";
import { Input } from "semantic-ui-react";

class MasterPanel extends React.Component {
  constructor(props) {
    super(props);
    this.sections = props.sections;
  }

  render() {
    return (
      <div className="master-panel">
        <div className="master-panel--header">
          <button>Back to Overview</button>
        </div>
        <div className="master-panel--content">
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
