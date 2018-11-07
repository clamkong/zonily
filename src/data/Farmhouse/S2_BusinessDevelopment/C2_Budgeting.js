const data = {
  chapterId: 1,
  title: "Budgeting",
  subChapters: [
    {
      subChapterId: 1,
      title: "Budgeting",
      type: "GRID",
      data: [
        {
          id: 0,
          title: "Time",
          details: [
            {
              title:
                "Farmhouse took 3 months after signing the lease for the restaurant to open its doors"
            },
            { title: "Renovation took majority of the time prior to opening" },
            {
              title:
                "If you are an investor, don’t expect to be able to take out your money for a long time due to capital gains taxes when you retrieve the money. Alternatively, you may be able to roll the money over into a new location without having to pay capital gains taxes"
            }
          ]
        },
        {
          id: 1,
          title: "Initial Costs",
          details: [
            {
              title:
                "Initial costs it took to open Farmhouse Thai Kitchen in Mission District  - $350,000 starting costs in total ",
              children: [
                "$35,000 was from savings from Thai Idea",
                "$50,000 was borrowed from parents",
                "$50,000 was personal savings from working at Osha Thai"
              ]
            }
          ]
        },
        {
          id: 2,
          title: "Accounting",
          details: [
            {
              title:
                "You will need  6 months of back up cash flow before starting a business for unforeseen costs such as labor, renovation, materials and equipment, etc."
            },
            {
              title: "Once you have your starting budget, give it to your CPA",
              children: [
                "Your taxes will be higher after your first year because your initial investment is higher in the beginning and so you will have greater deductions in the first year",
                "Submit your taxes on a weekly basis if you want to avoid any suspicion from the IRS. Normally when you submit your first year taxes you will be submitting at a loss because you started in the middle of the year, your revenue is still building, and you put a lot of initial investment into your business. In the second year your revenue will jump up and you will have less deductions because you are calculating on a full year of revenue with less starting costs. This occasionally will create suspicion from the IRS and result in auditing your business.",
                "Usually you can make deductions on your business in 4, 7, or 10 year increments. However, if you used a previous restaurant’s money to rollover into opening a new restaurant then you will not be able to deduct your initial investments."
              ]
            }
          ]
        },
        {
          id: 3,
          title: "People",
          details: [
            {
              title:
                "There were four people involved in the opening of Farmhouse Thai Kitchen, one CPA, one long time coworker, one partner, and Kasem. They had all worked together extensively in the past in different restaurants."
            },
            {
              title:
                "When starting a restaurant, it is important to talk to your partners about distinct roles and responsibilities prior to starting the restaurant."
            },
            {
              title:
                "When hiring contractors, expect that the price can vary month to month as new unexpected items come up."
            }
          ]
        }
      ]
    },
    {
      subChapterId: 1,
      title: "Ongoing Costs",
      type: "PIE",
      data: [
        {
          title: "Marketing",
          value: 0.025,
          details: [
            "Register for Fivestar that rewards customers for coming back to the restaurant",
            "Register Google place",
            "Google business",
            "Google SEO",
            "Google analyzer"
          ]
        },
        {
          title: "Miscellaneous",
          value: 0.04,
          details: [
            "Website is at the top of the list when people search “best thai food”",
            " Move to facebook and Instagram advertising",
            "Check on report: Likes ? Repost ? Time spent ?",
            "Facebook video clips advertisement",
            "Thai new year event $20 / day targeted ad",
            "Lots of response and likes",
            "People spend at least 30 seconds",
            "Started booking reservations on that day",
            "Realized that social media was the way they wanted to reach new customers and markets",
            "TIP: 10 % of people who liked your post will show up"
          ]
        },
        {
          title: "Rent",
          value: 0.055,
          details: [
            "Farmhouse hired a social media professional photographer and to take video shots",
            "Show Chef Kasem and post on social media for Farmhouse",
            "Leverage Youtube to post videos",
            "Uber / lyft",
            "Ubereats",
            "Special programs",
            "Continue with targeted ads "
          ]
        },
        {
          title: "Food",
          value: 0.24,
          details: [
            "Spends an average of $5,000 on social media every month on each location(started with $200 - 500 / month)",
            "Facebook ads",
            "Instagram ads",
            "Google ads",
            "Food bloggers and influencers to post on their page",
            "SEO",
            "“the best thai restaurant”",
            "Words used: thai, northern thai, ihsan, spicy food, fun, good drinks",
            "TIP: must be specific on what you do (e.g.noodle house)",
            "TIP: use words that describe feeling(e.g.fun)",
            "Gay parade - $40, 000",
            "Custom - made costumes",
            "Hired performers",
            "Result: Chron 4 news, SF magazine, SF eater, Chronicle",
            "Announced Jack London Square opening",
            "Used ad space on local food newsletters and blog pages",
            "E.g.SFeater, 7x7, etc.",
            "Discontinued after 2017 due to switching focus on social media",
            "Food adviser",
            "Yelp",
            "Instagram",
            "Facebook "
          ]
        },
        {
          title: "Labor",
          value: 0.55,
          details: [
            {
              title:
                "Pay yourself as a high salaried employee rather than taking out directly from the corporation. That way, payroll is tax deductible rather than paying capital gains tax on taking profit out of the corporation."
            },
            {
              title:
                "If you are looking to purchase another restaurant, don’t pay yourself too high of a salary and save money within the corporation so that you can rollover the money into a new business without paying taxes."
            }
          ]
        },
        {
          title: "Profit",
          value: 0.09,
          details: [
            "Hosted Yelp elite events",
            "Direct sales",
            "Caviar – profit is $360, 000 to the SF location(although they take 18 % charge from the total) ",
            "Branding ",
            "Employee T - shirts(repeat exposure)",
            "Collect information",
            "Reservation = emails(now 2, 000 - 3, 000 emails per restaurant) ",
            "Check on their experience",
            "Newest promotions",
            "Events RSVP ",
            "Whoever clicks like or comment on Farmhouse social media",
            "Let them know of end of the year event",
            "Promotions(such as $100 bonus for most - liked Instagram picture) "
          ]
        }
      ]
    },
    {
      type: "GRID",
      title: "Tips and Tricks",
      data: [
        {
          id: 0,
          title: "Labor",
          details: [
            "Pay yourself as a high pay employee rather than taking out directly from the corporation (payroll is deducted from the company)",
            "Don’t pay yourself too high, save money in the corporation so you can use the money to buy another one (otherwise you will pay double taxes, income and sales tax)"
          ]
        },
        {
          id: 1,
          title: "Taxes",
          details: [
            {
              title: "Types of taxes that you will have to pay",
              children: [
                "Income tax",
                "employee tax",
                "simple tax (air pollution tax, soda tax, recycling tax, etc.)",
                "sales tax"
              ]
            },
            {
              title:
                "If you schedule your payments weekly, your cash flow is more clear to the IRS and there may be a lesser chance of being audited or raising red flags "
            }
          ]
        },
        {
          id: 2,
          title: "Revenue and Growth",
          details: [
            "Farmhouse made $4 million in revenue  in the first year and grew 20-30% in revenue year after year, reaching $6 million in 6-7 years",
            "Make sure you know what to expect each season and month in terms of revenue, for example, if holiday season is generally lower in revenue, you can find special events, discounts, to drive up the price.",
            "Understanding the expected number of customers and revenue each month and season will also allow you to lock down the costs of the inventory so you don’t order too much or too little."
          ]
        },
        {
          id: 3,
          title: "Other",
          details: [
            "If you are going to work with close friends or family, make sure you are ready to win some battles and lose some battles",
            "Understand the demographic of your location, for example, is it a frequent place for celebration, tourists, or family casual eatery? Jack London Square is often a destination for celebration so it is important to have a cocktail menu and a festive atmosphere.",
            "Understand the common pitfalls of restaurants that fail within the first year or the first few years; they do not know how to manage a restaurant, cash flow, or accounting/taxation. If you do not understand how to properly manage taxation and create an IRS audit that fails then it can bring down your business.",
            "Don’t expect to retrieve the profit out of your business within the first few years of your business because it will cause a heavy capital gains burden."
          ]
        },
        {
          id: 4,
          title: "Story",
          details: [
            {
              title: `One of Kasem’s friends, Friend A, invested with another friend, Friend B, and opened a restaurant in Los Angeles, California. 
                Friend A owns a popular restaurant in San Francisco and used some of the profit to invest in Friend B for a new Los Angeles location. 
                Friend B that opened the new location had no prior experience running a restaurant. That restaurant soon resulted in major losses and made less 
                than $1-2,000 in sales per day. Friend A tried to retrieve her money back from the investment but could not. She asked Kasem why the restaurant did 
                not work since her first one was so successful. Kasem told her that it’s because she did not take a major role in teaching Friend B how to build and run a restaurant.`,
              children: [
                "A restaurateur needs to understand restaurant management and having a system",
                "As an investor you need to understand what to expect and how to teach your knowledge to others in order to empower them to succeed"
              ]
            }
          ]
        }
      ]
    }
  ]
};

export default data;
