import React from "react";
// import GridComponent from "../components/PlaybookPage/PlaybookPageContentComponents/Grid/GridContainer";
import GridComponent from "../components/PlaybookPage/PlaybookPageContentComponents/GridComponent/GridComponent"
// import StackComponent from "../components/PlaybookPage/PlaybookPageContentComponents/Stack/StackContainer";
import FlowComponent from "../components/PlaybookPage/PlaybookPageContentComponents/FlowComponent/FlowComponent";
import TextComponent from "../components/PlaybookPage/PlaybookPageContentComponents/TextComponent";
import PieComponent from "../components/PlaybookPage/PlaybookPageContentComponents/PieComponent/PieComponent";
import StackComponent from "../components/PlaybookPage/PlaybookPageContentComponents/StackComponent/StackComponent";

class ContentComponentManager {
  getComponent(data = {}, onContentSelected) {
    switch (data.type) {
      case "FLOW":
        return <FlowComponent data={data.data} onContentSelected={onContentSelected} />;
      case "PIE":
        return <PieComponent data={data.data} onContentSelected={onContentSelected} />;
      case "GRID":
        return <GridComponent data={data.data} onContentSelected={onContentSelected} />;
      case "TREE":
        return <TextComponent data={data.data} onContentSelected={onContentSelected} />;
      case "TEXT":
        return <TextComponent data={data.data} onContentSelected={onContentSelected} />;
      case "STACK":
        return <StackComponent data={data.data} onContentSelected={onContentSelected} />;
      default:
        return <TextComponent data={data.data} />;
    }
  }
}

export default ContentComponentManager;
