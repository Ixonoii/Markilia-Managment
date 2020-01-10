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
    if(!message.guild) return
    if(message.content === prefix + "test")
    message.channel.send("Test done!")
})

// ----------------------------------------- KICK COMMAND ----------------------------------------- //

client.on("message", message =>{
    let infokick = new Discord.RichEmbed()
    .setTitle("Commande : kick")
    .addField("**Description**", "Expulse un membre du serveur.")
    .addField("**Utilisation**", prefix + "kick [utilisateur] [raison]")
    .addField("**Autorisation nécessaire**", "Expulser des membres.")
    .addField("**Exemple**", prefix + "kick @Ixonoii Insulte.")
    if(!message.guild) return
    if(message.content === prefix + "info kick")
    message.channel.send(infokick)
})

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'kick') {
        let notallowed = new Discord.RichEmbed()
        .setTitle(notallowedmessage)
        let nomention = new Discord.RichEmbed()
        .setTitle("Veuillez mentionner un utilisateur.")
        let noreason = new Discord.RichEmbed()
        .setTitle("Veuillez entrer une raison.")
        let cantkick1 = new Discord.RichEmbed()
        .setTitle("Vous ne pouvez pas kick cet utilisateur.")
        let cantkick2 = new Discord.RichEmbed()
        .setTitle("Je ne peux pas kick cet utilisateur.")
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(notallowed)
       let member = message.mentions.members.first()
       let reason = args.slice(1).join(" ")
       if (!member) return message.channel.send(nomention)
       if (!reason) return message.channel.send(nomention)
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send(cantkick1)
       if (!member.kickable) return message.channel.send(cantkick2)
       let success = new Discord.RichEmbed()
        .setTitle(emoji(successlogo) + " " + member.displayName + " a été expulsé par " + message.author.username + " pour la raison suivante : " + reason)
       member.kick()
       message.channel.send(success)
    }
})
