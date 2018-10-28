const data = {
  title: "Proccesses",
  chapterId: 2,
  subChapters: [
    {
      subChapterId: 0,
      title: "Quality Control",
      type: "FLOW",
      data: [
        {
          id: 0,
          title: 'Line Cook 1 -> Line Cook 2 -> Checker -> Food Runner -> Server (delivery) -> Manager -> Kitchen Manager',
          details: [
          ]
        },
        {
          id: 1,
          title: 'Server -> Manager -> Kitchen Manager',
          details: [
            "POS",
            "No food without ticket",
            "All VOID tickets are sent to the manager for monitoring",
            "POS order",
            "Example - Click table C1",
            "Fire appetizers, fire entrees, fire dessert"
          ]
        },
        {
          id: 2,
          title: 'Kitchen',
          details: [
            "Make the big orders first",
            "Combine orders if they are the same (e.g. pad thai or fried rice)"
          ]
        },
      ]
    },
    {
      subChapterId: 1,
      title: "Customer Service",
      type: "FLOW",
      data: [
        {
          id: 0,
          title: 'Greeting - specific message including programs',
          details: [
            "We have a spicy challenge",
            "Most liked instagram picture",
            "Give them tips on how they can win"
          ]
        },
        {
          id: 1,
          title: 'Upsell - what they like',
          details: [

          ]
        },
        {
          id: 2,
          title: 'Knowledge of menu',
          details: [
            "Sauce",
            "Dish story",
            "How it's made",
            "Why it costs so much"
          ]
        },
        {
          id: 3,
          title: 'Service/care - double check with customer',
          details: [
            "Spicy level",
            "If it's good and they like it"
          ]
        },
        {
          id: 4,
          title: "Dessert",
          details: []
        },
        {
          id: 5,
          title: "Gift Card/Events",
          details: [
            'Offer a chance to make it special for an upcoming special event (birthday, anniversary, etc)'
          ]
        },
      ]
    },
    {
      subChapterId: 2,
      title: "Kitchen",
      type: "TREE",
      data: {
        name: "Stock",
        content: `
          Protien
          Vegetables
          Carbohydates
          Sauce`,
        children: [
          {
            name: 'Stations',
            details: [
              'Wok',
              'Soup',
              'Deep fry',
              'Appetizer/cold'
            ]
          },
          {
            name: 'Check',
            details: []
          },
          {
            name: 'Food runner',
            details: []
          }
        ]
      }
    },
    {
      subChapterId: 2,
      title: "Front of House",
      type: "STACK",
      data: [
        {
          id: 0,
          title: "Manager",
          content: [
            "Control the front, make sure customers are happy, and make sure servers are at their best"
          ]
        },
        {
          id: 1,
          title: "Manager",
          content: [
            "Control the front, make sure customers are happy, and make sure servers are at their best"
          ]
        },
        {
          id: 2,
          title: "Organization",
          content: [
            "Label different sections of the restaurant the front of the house"
          ],
          details: [
            "A section - each table is A1, A2, etc",
            "B Section - Bar",
            "C Section - each table is C1, C2, et"
          ]
        },
        {
          id: 3,
          title: "POS System",
          content: [
            "Organize by section of the restaurant",
            "Guest list (guest1, guest2, guest3)",
            "Appetizer order -> Kitchen -> Drink Order -> Bar"
          ],
          details: [
            "Order go to the manager with an inventory report automatically calculated by the POS",
            "Profit and loss (P&L) report goes to Chef Kasem at the end of each day"
          ]
        }
      ]
    },
    {
      subChapterId: 3,
      title: 'Tips and Tricks',
      type: 'STACK',
      data: [
        {
          id: 0,
          title: 'POS',
          content: [
            'All screens have text, i.e. Help C1 (Table) - then manager will keep an eye on it',
            'Live intercom for all staff'
          ]
        },
        {
          id: 1,
          title: 'Communication',
          content: [
            'Server cannot communicate with the kitchen to avoid miscommunication',
            'Only POS tickets and orders are communicated to the kitchen by the server',
            'Instead, the kitchen manager and front manager will communicate',
            'Communicate with PICTURES instead of words to ensure everyone understands the prep and cleaning process'
          ]
        },
        {
          id: 2,
          title: "Customer Management",
          content: [
            "Do best to get people in during non-peak hours by calling them and moving their reservations earlier",
            "Have a bar so people can come and drink while they wait"
          ]
        }
      ]
    }
  ]
}

export default data
