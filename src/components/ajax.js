const sampleGridPayload = {
  type: "GRID",
  title: "Business and Marketing",
  data: {
    "section": "Tips and Tricks",
    "boxes": [
      {
        description: "Decor",
        color: "light blue",
        details: "Decor - More details"
      },
      {
        description: "Customers",
        color: "Navy Blue",
        details: "Customers - More details"
      },
      {
        description: "Employees",
        color: "Orange",
        details: "Employees - More details"
      },
      {
        description: "Outreach",
        color: "Pink",
        details: "Outreach - More details"
      },
      {
        description: "Community",
        color: "Teal",
        details: "Community - More details"
      },
      {
        description: "Engagement",
        color: "Green",
        details: "Engagement - More details"
      },
      {
        description: "Brand",
        color: "Yellow",
        details: "Brand - More details"
      }
    ]
  }
};

const sampleStackPayload = {
  type: "STACK",
  data: {
    section: "Intro",
    stacks: [
      {
        stackNumber: 1,
        stackTitle: "Common philosophy",
        stackInfo: [
          "We are going to invest and not save a penny to lose $1 million",
          "Vacation pay for employees and employee benefits",
          "Treat employee like family, not like employees",
          "System above all"
        ]
      },
      {
        stackNumber: 2,
        stackTitle: "Splitting Shares",
        stackInfo: [
          "70% to Chef Kasem – 16 years of experience and investment",
          "30% to new partner – investment"
        ]
      },
      {
        stackNumber: 3,
        stackTitle: "Looking for a Partner",
        stackInfo: [
          "Has to be as hard working or more hard working",
          "Someone Chef Kasem has previously worked with (most often managers) for at least 1.5 years"
        ]
      },
      {
        stackNumber: 4,
        stackTitle: " How to treat partners",
        stackInfo: [
          "You become my family/team, I never abandon you even if you fight (disagreements always happen)",
          "You have to teach them how to run a business"
        ]
      },
      {
        stackNumber: 5,
        stackTitle: "Example",
        stackInfo: [
          "One friend, a successful restaurateur, spent $600K on investment into a remote business that another partner with no experience ran but never taught her how to run a business so ended up being a complete loss."
        ]
      }
    ]
  }
}

export const fetchGridDetails = (id, callback) => {
  callback(sampleGridPayload)
}

export const fetchStackDetails = (id, callback) => {
  debugger;
  callback(sampleStackPayload)
}
