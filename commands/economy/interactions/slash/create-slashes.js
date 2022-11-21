module.exports = [
  {
    name:"create-all",
    code:`
      $createApplicationCommand[global;bank;bank;true;slash;
        [
          {
            "name": "withdraw",
            "description": "Withdraw coins from your bank account", 
            "type": "SUB_COMMAND",
            "options" : 
              [
                {
                  "name" : "amount",
                  "description" : "Amount of coins you want to withdraw, or for faster withdrawal 'all' or 'max' ",
                  "required" : true,
                  "type" : "STRING"
                }
              ]
          },
          {
            "name": "deposit",
            "description": "Deposit coins from your bank account", 
            "type": "SUB_COMMAND",
            "options" : 
              [
                 {
                  "name" : "amount",
                  "description" : "Amount of coins you want to deposit, or for faster deposit 'all' or 'max' ",
                  "required" : true,
                  "type" : "STRING"
                }
              ]
          }
        ]
      ]
      
      $createApplicationCommand[global;claim;Help Command;true;slash;
        [
          {"name": "daily",  "description": "Daily Coins", "type": "SUB_COMMAND"},
          {"name": "hourly","description": "Hourly coins", "type": "SUB_COMMAND"},
          {"name": "monthly",  "description": "Monthly coins", "type": "SUB_COMMAND"},
          {"name": "69minutely","description": "69 minutely coins", "type": "SUB_COMMAND"}
        ]
      ]

      
      $createApplicationCommand[global;User Inventory;;true;user]
      $createApplicationCommand[global;inventory;Check out your items;true;slash]

      
      $createApplicationCommand[global;share;Share with someone;true;slash;
        [
          {
            "name" : "user",
            "description" : "the user",
            "type" : 6,
            "required" : true
          },
          {
            "name" : "amount",
            "description" : "amount of coins",
            "type" : 4,
            "required" : true
          }
        ]
      ]
    `
  }
]