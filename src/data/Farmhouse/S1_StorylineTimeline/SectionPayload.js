import IntroductionChapter from "./Introduction"
import HistoryTimelineChapter from './HistoryTimeline';
import TipsTricks from "./TipsTricks";

const payload = {
  sectionId: 0,
  sectionTitle: "Storyline",
  chapters: [
      IntroductionChapter,
      HistoryTimelineChapter,
      TipsTricks
  ]
};

export default payload;
