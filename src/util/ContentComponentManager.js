import React from "react";

import FlowComponent from "../components/PlaybookPage/PlaybookPageContentComponents/FlowComponent/FlowComponent";
import TextComponent from "../components/PlaybookPage/PlaybookPageContentComponents/TextComponent";

class ContentComponentManager {
  getComponent(data) {
    switch (data.type) {
      case "FLOW":
        return <FlowComponent data={data.data} />;
      case "PIE":
        // return <PieComponent data={data.data} />
        break;
      case "GRID":
        // return <GridComponent data={data.data} />
        break;
      case "TREE":
        // return <TreeComponent data={data.data} />
        break;
      case "TEXT":
        return <TextComponent data={data.data} />;

      default:
        return <TextComponent data={data.data} />;
        break;
    }
  }
}

export default ContentComponentManager;
