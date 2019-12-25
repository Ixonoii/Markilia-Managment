/////////////////////////////////////// CONFIGURATION ///////////////////////////////////////

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var color = "#4d78f0";
var activity = "-aide | -invite";
var prefix = "-";

client.login(process.env.BOT_TOKEN)

client.on('ready', function(){
    client.user.setActivity(activity, {type: "PLAYING"})
})

function emoji (id) {
    return client.emojis.get(id).toString();
}

/////////////////////////////////////// SERVEUR ///////////////////////////////////////

client.on('message', message =>{
    if(message.content === prefix + "serveur"){
        let servembed = new Discord.RichEmbed()
        .setTitle("Voici quelques informations à propos du serveur " + message.guild.name)
        .setThumbnail(message.guild.iconURL)
        .addField("Propriétaire du serveur :", message.guild.owner.displayName)
        .addField("Nom du serveur :", message.guild.name, true)
        .addField("ID du serveur :", message.guild.id, true)
        .addField("Nombre de membres :", message.guild.memberCount + " membres", true)
        message.channel.send(servembed)
    }
})
