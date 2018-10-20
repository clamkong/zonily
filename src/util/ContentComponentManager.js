import React from "react";
import GridComponent from "../components/PlaybookPage/PlaybookPageContentComponents/Grid/GridContainer";
import StackComponent from "../components/PlaybookPage/PlaybookPageContentComponents/Stack/StackContainer";
import FlowComponent from "../components/PlaybookPage/PlaybookPageContentComponents/FlowComponent/FlowComponent";
import TextComponent from "../components/PlaybookPage/PlaybookPageContentComponents/TextComponent";
import PieComponent from "../components/PlaybookPage/PlaybookPageContentComponents/PieComponent/PieComponent";

class ContentComponentManager {
  getComponent(data) {
    switch (data.type) {
      case "FLOW":
        return <FlowComponent data={data.data} />;
      case "PIE":
        return <PieComponent data={data.data} />
      case "GRID":
        return <GridComponent data={data.data} />
      case "TREE":
        return <TextComponent data={data.data} />
      case "TEXT":
        return <TextComponent data={data.data} />;
      case "STACK":
        return <StackComponent data={data.data} />;
      default:
        return <TextComponent data={data.data} />;
    }
  }
}

export default ContentComponentManager;
