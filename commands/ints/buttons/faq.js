module.exports = [{
  name:"F1",
  prototype:"button",
  type:"interaction",
  code:`
    $interactionReply[_ _;
      {newEmbed:
        {color:#00FF00}
        {title:FAQ #1}
        {description: 
          **Q** \: Why does the bot go offline for a few seconds then back online again?
          **A** \: Usually hosting error or an update
        }
      }
    ;;no;users;yes]
`
},{
  name:"F2",
  prototype:"button",
  type:"interaction",
  code:`
    $interactionReply[_ _;
      {newEmbed:
        {color:#00FF00}
        {title:FAQ #2}
        {description:
          **Q** \: When is the bot mostly online?
          **A** \: Occasionally 24/7.
        }
      }
    ;;no;users;yes]
 `
},{
  name:"F3",
  prototype:"button",
  type:"interaction",
  code:`
  $interactionReply[_ _;
    {newEmbed:
      {color:#00FF00}
      {title:FAQ #3}
      {description: **Q** :
        I bought Shield HP, but in my inventory it still shows inactive, Why?
        **A** : In order for your shield to show active you will need a shield and shield HP.
      }
    }
  ;;no;users;yes]
 `},{
  name:"F4",
  type:"interaction",
  prototype:"button",
  code:`
    $interactionReply[_ _;
      {newEmbed:
        {color:#00FF00}
        {title:Faq #4}
        {description:**Q** \:
          How do i become a bot admin?
          **A** \: You cannot get it by asking for it. (Currently) 2 members have it because they are trusted moderators. Which some times controbuted to helping adding commands. This is a very rare badge/role/etc to get, takes about a 6 months or 2 after being accepted as an Admin in the support server
        }
      }
    ;;no;users;yes]
 `},{
  name:"F5",
  prototype:"button",
  
  type:"interaction",
  code:`
    $interactionReply[_ _;
      {newEmbed:
        {color:#00FF00}
        {title:FAQ #5}
        {description:
          **Q** \: How do I transfer my cash from the BDFD bot to the JS bot? (old to new)
          
          **A** \:
          
          **[YOU HAVE TO JOIN THIS SERVER TO START THE PROCEDURE!](https://discord.gg/6mnwXeC2QR)**
          
          \`1.\` Run **y#with all** to withdraw all your coins from the old bot.
          \`2.\` Run **y!dep all** to deposit all your coins from the new bot to your bank (YOU ARE GOING TO NEED TO DO THIS)
          \`3.\` Run **y#bal** to get your balance form the old bot.
          \`4.\` Copy the **Message ID** of your embedded balance. (If you do not know how to get the message ID, [follow this](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-))
          \`5.\` Run **y!monRetr** along with the copied message ID and it should output **\`Money Switch Successful!\`**
          And there you have it!
          All Commands should be run in <#?859876980790263838> or <#?859876980790263838>
          
          Old bot - <@701280304182067251>
          New bot - <@887522919255789629>
          
          IMPORTANT : Make sure your using the **right bot!** The prefixes are __different__ for a reason! And make sure when you copy the message id, its of **your balance** not another person's. Another person's balance will not work even if you tried.
          Another thing, this can only be done **__ONCE__**, so do not get the procedure wrong, or you might risk losing your current coins
        }
      }
    ;;no;users;yes]`
},{
  name:"F6",
  type:"interaction",
  prototype:"button",
  code:`
    $interactionReply[_ _;
      {newEmbed:
        {color:#00FF00}
        {title:Faq #6}
        {description:
          **Q** \: How do i see my cooked food?
          **A** \: Well, you can't currently. But I'm working on it \:D
        }
      }
    ;;no;users;yes]`
}]