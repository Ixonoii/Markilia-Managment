// ----------------------------------------- SETTINGS ----------------------------------------- //

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var successcolor = "#04f028";
var errorcolor = "#ff0000";
var prefix = ";";
var status = prefix + "aide";

client.login(process.env.BOT_TOKEN)

function emoji (id) {
    return client.emojis.get(id).toString();
}

client.on('ready', function(){
    client.user.setActivity(status, {type: "PLAYING"})
})

client.on("message", message =>{
    let privatechannel = new Discord.RichEmbed()
    .setTitle(emoji("659504785036148750") + " Veuillez utiliser cette commande sur un serveur.")
    .setColor(errorcolor)
    if(message.channel.type = "dm") return message.channel.send(privatechannel)
    if(message.content === prefix + "test")
    message.channel.send("Test done!")
})
