
## Get Bot
Route: `/bot/<bot_id>` <Badge type='tip' text='GET' vertical='middle'/>

:::warning Warning!
This route will only return non-sensitive information. However, if holding a token that matches the bot's, full information will be returned.
:::
## Update Bot Info
Route: `/bot<bot_id>` <Badge type='tip' text='POST' vertical='middle'/>
:::tip Info
The data sent should be serialized into a string. Failure to do so can corrupt your bot's information!
:::
### Keys
| Name | Description | Remarks | Required? |
| --- | --- | --- | --- |
| shortdesc | Edits the short description of your bot | Must be more than 15 characters | true |
| longdesc | Edits the long description of your bot | Must be more than 100 characters | true |
| prefix | Edit your bot's prefix | null | true |
| banner | Edit your bot's banner | null | false |
| invite | Edit your bot's invite URL | Must start with https://discord.com/api/oauth |false | null |
| website | Edit your bot's website URL | null | false |
| github | Edit your bot's github Repo | null | false |
| support | Edit your bot's support Server | null | false |


### Encode it!
Encode your data (a dictionary) into `x-www-form-urlencoded`. Your dictionary should be formed like the table above. Addtional keys will be ignored!