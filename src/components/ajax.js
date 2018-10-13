const sampleGridPayload = {
  type: "GRID",
  title: "Business and Marketing",
  data: {
    "section": "Tips and Tricks",
    "boxes": [
      {
        description: "Decor",
        color: "light blue"
      },
      {
        description: "Customers",
        color: "Navy Blue"
      },
      {
        description: "Employees",
        color: "Orange"
      },
      {
        description: "Outreach",
        color: "Pink"
      },
      {
        description: "Community",
        color: "Teal"
      },
      {
        description: "Engagement",
        color: "Green"
      },
      {
        description: "Brand",
        color: "Yellow"
      }
    ]
  }
};

export const fetchGridDetails = (id, callback) => {
  callback(sampleGridPayload)
}
