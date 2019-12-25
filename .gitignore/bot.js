/////////////////////////////////////// CONFIGURATION ///////////////////////////////////////

const Discord = require("discord.js");
const client = new Discord.Client;
const fs = require('fs');
var color = "#07a5f1";
var activity = "-aide | -invite";
var prefix = "-";
var credits = "Arplex - Tous droits réservés"
var notallowed = emoji("659504785036148750") + "Vous ne disposez pas des autorisations nécessaires pour utiliser cette commande."

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
        .addField("**Propriétaire du serveur**", message.guild.owner.displayName)
        .addField("**Nom du serveur**", message.guild.name, true)
        .addField("**ID du serveur**", message.guild.id, true)
        .addField("**Nombre de membres**", message.guild.memberCount + " membres", true)
        .addField("**Date de création du serveur**", message.guild.createdAt)
        .setTimestamp(Date.now())
        .setFooter(credits, message.author.displayAvatarURL)
        message.channel.send(servembed)
    }
})

client.on('message', message =>{
    if(message.content === prefix + "info serveur"){
        let servembed = new Discord.RichEmbed()
        .setTitle("Commande : serveur \n Description : Affiche des informations sur le serveur. \n Autorisation nécessaire : Aucune \n Usage : " + prefix + "serveur")
        .setColor(color)
        .setTimestamp(Date.now())
        .setFooter(credits, message.author.displayAvatarURL)
        message.channel.send(servembed)
    }
})

/////////////////////////////////////// AVATAR ///////////////////////////////////////

client.on('message', function(message){
    if(message.content === prefix + "avatar"){
        var pong_enbed = new Discord.RichEmbed()
        .setTitle("Voici votre avatar, " + message.author.username + ".")
        .setColor(embedcolor)
        .setImage(message.author.displayAvatarURL)
        .setURL(message.author.displayAvatarURL)
        message.channel.send(pong_enbed)
    }
})

client.on('message', message =>{
    if(message.content === prefix + "info avatar"){
        let servembed = new Discord.RichEmbed()
        .setTitle("Commande : avatar \n Description : Affiche la photo de profil d'un utilisateur. \n Autorisation nécessaire : Aucune. \n Usage : " + prefix + "avatar")
        .setColor(color)
        .setTimestamp(Date.now())
        .setFooter(credits, message.author.displayAvatarURL)
        message.channel.send(servembed)
    }
})
