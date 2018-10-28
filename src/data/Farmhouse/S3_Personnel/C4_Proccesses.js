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
    }
  ]
}

export default data
