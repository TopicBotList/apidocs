import Callout from 'nextra-theme-docs/callout'

## Bot Structure

| Field     | Type        | Description                                                                                         |
| --------- | ----------- | --------------------------------------------------------------------------------------------------- |
| name      | `String`    | Discord Username of the Bot.                                                                        |
| tags      | `String`    | List of the Bots Tags (Moderation etc).                                                             |
| prefix    | `String`    | The Bots Prefix used to trigger Discord Messages.                                                   |
| owner     | `String`    | Username of the Bots Main Owner/Developer.                                                          |
| additional_owners       | `Array`    | Array of Additional Owner IDs.                                                         |
| staff_bot | `Boolean`   | The Bots Staff Status in our Discord Server.                                                        |
| short     | `String`    | The Bots Short Description displayed on our Website.                                                |
| long      | `String`    | The Bots Long Description displayed on our Website.                                                 |
| nsfw      | `Boolean`   | If the Bot contains NSFW Features (True or False).                                                  |
| library   | `String`    | The Lib/Library that the Bot is made in (Ex: Javascript).                                           |
| premium   | `Boolean`   | The Bots Premium Status on our Website.                                                             |
| certified | `Boolean`   | The Bots Certified Status on our Website.                                                           |
| servers   | `Integer`   | Number of Servers the Bot is in.                                                                    |
| shards    | `Integer`   | Numbet of Shards the Bot has.                                                                       |
| votes     | `Number`    | Number of Upvotes that the Bot has.                                                                 |
| views     | `Number`    | Number of Views the Bot has (Not Unique).                                                           |
| invites   | `Number`    | Number of Invites the Bot has.                                                                      |
| website   | `String`    | The Bots Official Website:l/Dashboard.                                                              |
| donate    | `String`    | The Bots Patreon, PayPal or Other Donation Link.                                                    |
| support   | `String`    | The Bots Support Server Invite Link.                                                                |
| github    | `String`    | The Bot or Developers GitHub Page.                                                                  |
| banner    | `String`    | The Bots Custom Banner Link.                                                                        |
| invite    | `String`    | The Bots Discord Invite URL.                                                                        |

---

### Example Structure

```json
{
"name":"Topiclist",
"tags":"Customizable Prefix, Media",
"prefix":"tbl!",
"owner":"ranveersoni",
"additional_owners":[],
"staff_bot":true,
"short":"The manager bot for this bot list.",
"long":"idk what to put here but it should be long upto 200+ letter",
"library":"djs",
"nsfw":true,
"programs":{
  "premium":false,
  "certified":true
},
"analytics":{
  "servers":"0",
  "shards":"0",
  "votes":4,
  "views":54,
  "invites":"0"
},
"links":{
"website":"https://topiclist.xyz",
"donate":"None",
"support":"https://topiclist.xyz/dc",
"github":"None",
"banner":"https://i.imgur.com/lNdMzuW.png",
"invite":"https://discord.com/api/oauth2/authorize?client_id=765088908773818378&permissions=402517239&redirect_uri=https%3A%2F%2Fapi.striderbot.net%2Ffrom_discord&response_type=code&scope=bot%20applications.commands%20applications.commands.update"
 }
}

```## POST Bot Stats

<HT

---

## Example 400 Structure

```json
{
  "message":"Unable to find that bot! Has it been approved?",
  "error":true,
  "status":400
}