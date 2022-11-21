module.exports = [
  {
    name:"create4545",
    code:`
      $createApplicationCommand[$guildID;choice;slash command choices showcase!;true;slash;
        [
          {
            "name": "option",
            "description": "options example",
            "required": true,
            "type": "STRING",
            "choices" : 
              [
                {
                  "name" : "test1",
                  "value" : "value1"
                },{
                  "name" : "test2",
                  "value" : "value2"
                },{
                  "name" : "test3",
                  "value" : "value3"
                }
              ]
          }
        ]
      ]
    `
  }
]