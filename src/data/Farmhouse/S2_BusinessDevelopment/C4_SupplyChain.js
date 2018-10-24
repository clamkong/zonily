const data = {
  title: "Supply Chain",
  chapterId: 1,
  subChapters: [
    {
      subChapterId: 0,
      type: "STACK",
      title: 'Food',
      data: [
        {
          id: 0,
          title: 'Food star – ones that don’t make money because the cost of making it is so high but draws customers in',
          content: [
            'beef rib plate with blue rice',
            'Bone $9/lb',
            'Labor 6 hours at $15/hr = $90 to make $45 orders',
            'Total cost = $16 to make (sold at $28)',
            'Not including employee insurance, taxes, equipment, etc.',
            'Thai iced tea',
            'Craft cocktails',
            'Fried chicken plate'
          ]
        },
        {
          id: 1,
          title: 'Money makers – ones that are fillers that customers order that the restaurant generates a profit from',
          content: [
            'Paid thai',
            'Coke',
            'Gin and tonic'
          ]
        },
        {
          id: 2,
          title: "Examples",
          content: [
            'Snake liver farm – high standard beef',
            'Negotiate using quantity and guarantee of order',
            'come up with a number of how many lbs per week you need to order per week to be able to talk with the owner and negotiate a good price',
            'Farmhouse started with 300lb per week per location',
            'Sun Lee Produce',
            'Build trust by showing them that you are busy'
          ]
        }
      ]
    },
    {
      subChapterId: 1,
      type: "TEXT",
      title: 'Tips and Tricks',
      data: [
        'Finding a good quality for a reasonable price',
        'Make sure you know what the culture is in the area',
        'What types of vegetables are locally grown in the region that you should buy?',
        'Is it really locally grown if it says locally grown? Doesn’t mean everything is locally grown',
        'Is there a lot of recalls from a particular brand?',
        'If you are a manager now, build relationships with the suppliers',
        'Pop build relationship with the suppliers when he was at Osha Thai'
      ]
    }
  ]
}

export default data
