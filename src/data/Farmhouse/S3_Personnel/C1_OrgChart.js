const data = {
  chapterId: 1,
  title: "Organization Chart",
  subChapters: [
    {
      subChapterId: 0,
      title: "Overview",
      type: "TEXT",
      data: [
        "200 Employees Total: Oakland(62), San Francisco(60), Portland(45)"
      ]
    },
    {
      subChapterId: 1,
      title: "Schedule of Growth",
      type: "TREE",
      data: {
        name: "Farmhouse Partners",
        content: `Who are the partners?
All partners worked with Pop for more than 6 - 7 years
Their role is to understand the problems the business is facing, build a system that can run autonomously and guide, prepare and focus on the big picture
For Example: Revenue goal for the San Francisco was $500K.The managers need to keep track of daily earnings.Is $4000 per night enough ?`,
        children: [
          {
            name: "Pop",
            details: [
              "Role: overview and monitor",
              "Train other partners and managers",
              "Train servers",
              "Marketing for the business brand"
            ]
          },
          {
            name: "Pooja",
            details: [
              "Role: overview and monitor",
              "Inventory monitoring",
              "Train servers",
              "Special event coordination"
            ]
          },
          {
            name: "Arty",
            details: [
              "Role: CPA, legal and taxation",
              "Paperwork",
              "Legal documentation",
              "Taxes",
              "Fun Fact: Arty has been working with Pop for over 10 years."
            ]
          }
        ]
      }
    },
    {
      subChapterId: 2,
      title: "Management",
      type: "TREE",
      data: {
        name: "Farmhouse Partners",
        content: `Total: 12 Managers, TODO: Responsibilities and Comp?`,
        children: [
          {
            name: "Front Manager (3 Total)",
            details: [
              "Bar system",
              "Inventory system",
              "Hire contractor managers in case of emergency",
              "Have a group chat to communicate"
            ]
          },
          {
            name: "Kitchen Manager (1 Total)",
            details: [
              "Prep schedule",
              "Ordering",
              "Inventory vendors",
              "Cleaning schedule",
              "Support head chef",
              "Communicate between locations to solve problems or collaborate with vendors on pricing"
            ]
          },
          {
            name: "Bar Manager (1 Total)",
            details: []
          }
        ]
      }
    },
    {
      subChapterId: 3,
      title: "Kitchen",
      type: "TREE",
      data: {
        name: "Kitchen Staff",
        content: `Total: 24 Persons/Shift`,
        children: [
          {
            name: "Head Chef",
            details: [
              "Schedule ",
              "Inventory and vendors",
              "Monitors recipes",
              "Manages quality of food and product / supply ",
              "Temperature",
              "Cleaning"
            ],
            children: [
              {
                name: "Line Cook (16 persons/shift)",
                details: [
                  "Wok station",
                  "Curry station",
                  "Sauce",
                  "Cold station",
                  "Desert station",
                  "Deep fry station(most advanced) "
                ]
              },
              {
                name: "Prep Cook (2 persons/shift)",
                details: [
                  "Handle plating and silverware",
                  "Must be clean ",
                  "TIP: Pop personally trains the prep position to cut the fat and how to hand - cut veggies]"
                ]
              },
              {
                name: "Janitor",
                details: [
                  "Dishwasher and janitor work with prep to make sure old food is thrown away and new food is stored in safe place ",
                  "$3, 200 - $3, 600 inside and $2, 000 outside for each location per month",
                  "NOTE: Hired through third party for liability reasons"
                ]
              },
              {
                name: "Dishwasher (4 persons/shift)",
                details: [
                  "Helps run the flow of things in the kitchen",
                  "NOTE: An important role due to health inspections"
                ]
              },
              {
                name: "Inventory Manager",
                details: ["Managers dry station", "Storage"]
              }
            ]
          }
        ]
      }
    },
    {
      subChapterId: 4,
      title: "Front of House",
      type: "TREE",
      data: {
        name: "Front of House Staff",
        content: `Total: 19-25 Persons/Shift`,
        children: [
          {
            name: "Front Manager",
            details: [],
            children: [
              {
                name: "Host",
                details: []
              },
              {
                name: "Bartender",
                details: []
              },
              {
                name: "Server",
                details: []
              },
              ,
              {
                name: "Food Runner",
                details: []
              },
              ,
              {
                name: "Busser",
                details: []
              },
              ,
              {
                name: "Bar Back",
                details: []
              },
              ,
              {
                name: "Checker",
                details: []
              }
            ]
          }
        ]
      }
    },
    {
      subChapterId: 5,
      title: "Accounting",
      type: "TREE",
      data: {
        name: "Accounting Staff",
        content: `Total: 24 Persons/Shift`,
        children: [
          {
            name: "Accountant",
            details: [
              "Separate all payments ",
              "Coordinate working schedules with managers",
              "Help with monthly sales predictions",
              "TIPS:",
              "Let your accountant or CPA review all checks first",
              "In-house accountants are easier to manage than external accountants",
              "Don’t put 100% trust in your accountant, even if it’s an in -house accountant"
            ]
          },
          {
            name: "Bookeeper",
            details: [
              "Quickbooks(cloud version) ",
              "Payroll ",
              "Estimate tax ",
              "In - house loss and profit",
              "Accept payments",
              "TIP:",
              "Ask your CPA and accountant to help you set up your Quickbooks or bookkeeping technology because a wrong set up will create penalties"
            ]
          },
          {
            name: "CPA",
            details: [
              "In charge of tax and employee deductions",
              "Manage all finances and ensure the business is in good standing(i.e.ensuring you are not late on taxes($6K penalty if so))",
              "TIP:",
              "How to make sure you have the right CPA ? Ask them what they would do as a solution for you in certain situations",
              "Fun Fact:",
              "Pop went through 7 CPA’s in 3 years."
            ]
          }
        ]
      }
    },
    {
      subChapterId: 5,
      title: "Story - Accounting",
      type: "TEXT",
      data: [
        "Story excerpt: Ed Lee approved numerous technology companies to move into San Francisco in 2012-2015. Housing prices doubled in 2 years so many previous residents moved out of the city and many new technology employees moved into San Francisco. For the restaurant business (Chef Kasem) predicted accurately that they will all be using online resources to find out where to go to eat. Therefore social media, google SEO, etc. became critical in growth. The new technology age group is 25-60 which is also the same target age range as Farmhouse."
      ]
    },
    {
      subChapterId: 6,
      title: "Lawyers",
      type: "TEXT",
      data: [
        `TODO: what type of view is this? Labor Lawyer: 
Handles all restaurants
Responsiveness for immediate problem solving
Confidentiality of training
Waiver of insurance (for 90 day probation)
Health insurance 

Fun Fact: 
Pop pays more for immediate response from the lawyer in case of emergencies
`
      ]
    },
    {
      subChapterId: 7,
      title: "Tips & Tricks",
      type: "GRID",
      data: [
        {
          id: 0,
          title: "Employee Management",
          details: [
            "Every state has different regulations on employee management(California has very strict laws on employee management)."
          ]
        },
        {
          id: 1,
          title: "Employees and Business Set-Up",
          details: [
            "If you have > 250 employees, you should set up as a corporation with smaller corporations within it to protect yourself",
            "If you have<250 employees, you should create separate corporations and have them run themselves for less payment and monitoring. (i.e.) Pop has created separate C-corp and S - corps for all of his locations because he has less than 250 employees.This way, he can receive tax benefits for both types of corporations.",
            "The more employees you have the more employee benefits you have to offer"
          ]
        },
        {
          id: 2,
          title: "Revenue and Business Set-Up",
          details: [
            "If this business makes > $3 million / year, then setting up the business as a C - corp is better. ",
            "(need more clarity on the talking points)",
            "Consult with your CPA on how much you can deduct - (i.e.Pop deducts 8 % of revenue for bonuses on top of labor)."
          ]
        },
        {
          id: 3,
          title: "Training",
          details: [
            "Pop hires more employees per shift but focuses on training his employees very well.This enables him to make $20, 000 - $30, 000 a night per location.His Jack London square location brings in $20, 000 a night after operating for only 1.5 months due to great personnel, system, and marketing experience.",
            "Ensure employees know how to upsell and train them to give them a better future. ",
            "As a business owner, always ask yourself - If you wanted to make $20, 000 a night, are you ready? Who else do you need to add? Is the POS system sustainable ? "
          ]
        },
        {
          id: 4,
          title: "Money",
          details: [
            "Money is time ",
            "Spend your money to have it work for you and give you more time "
          ]
        }
      ]
    },
    {
      subChapterId: 7,
      title: "Tips and Tricks - Video",
      type: "TEXT",
      data: [
        `Pop’s job is to create a system n the pyramid that can operate without him or any of the partners. An owner/partner’s job is to monitor and double-check the different systems and standards, not for anyone to rely on them to be present within the restaurant operations to run effectively.`
      ]
    }
  ]
};

export default data;
