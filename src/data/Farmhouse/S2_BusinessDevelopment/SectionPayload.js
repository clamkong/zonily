const payload = {
  sectionId: 1,
  sectionTitle: "Business Development",
  chapters: [
    {
      chapterId: 0,
      title: "Legality and Licenses",
      subChapters: [
        {
          subChapterId: 0,
          title: "Legality and Licenses",
          type: "STACK",
          data: []
        }
      ]
    },
    {
      chapterId: 1,
      title: "Budgeting",
      subChapters: [
        {
          subChapterId: 0,
          title: "Budgeting",
          type: "GRID",
          data: []
        },
        {
          subChapterId: 1,
          title: "Ongoing Costs",
          type: "PIE",
          data: []
        },
        {
          subChapterId: 2,
          title: "Tips and Tricks",
          type: "GRID",
          data: []
        }
      ]
    }
  ]
};

export default payload;
