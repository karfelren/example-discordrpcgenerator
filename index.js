const discord = require("discord.js-selfbot-v11")
const rpc = require("discordrpcgenerator");
const client = new discord.Client()

var uuid = ()=>([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,a=>(a^Math.random()*16>>a/4).toString(16))

client.on('ready', () => {
  client.user.setStatus('dnd')
})

client.on("ready", () => {
    rpc.getRpcImage("must be the same as the application id below", "key image")
    .then(image => {

        let presence = new rpc.Rpc()
              .setName("")  //name of the activity that will be displayed
              .setUrl("")   //only works on STREAMING type
              .setType("")  //(PLAYING, LISTENING, STREAMING, WATCHING, CUSTOM)
              .setApplicationId("must be the same as the application id above")
              
              .setDetails(``)
              .setState(``)
              .setAssetsLargeText(``)
              .setAssetsLargeImage(image.id)
              
              .setStartTimestamp(Date.now())
              //.setParty({size: [4, 4],id: uuid()})
         client.user.setPresence(presence.toDiscord())
        })
      console.log(`${client.user.username} Successfully Logged in!`);
    })

client.login(process.env.token)