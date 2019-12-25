/////////////////////////////////////// CONFIGURATION ///////////////////////////////////////

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var color = "#07a5f1";
var activity = "-aide | -invite";
var prefix = "-";
var credits = "Arplex - Tous droits réservés"

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
        .setTitle("__Voici quelques informations à propos du serveur " + message.guild.name + "__")
        .setThumbnail(message.guild.iconURL)
        .setColor(color)
        .addField("**Propriétaire du serveur**", message.guild.owner.displayName, true)
        .addField("**Nom du serveur**", message.guild.name, true)
        .addField("**ID du serveur**", message.guild.id, true)
        .addField("**Nombre de membres**", message.guild.memberCount + " membres", true)
        .addField("**Date de création du serveur**", message.guild.createdAt)
        .setTimestamp(Date.now())
        message.channel.send(servembed)
    }
})
