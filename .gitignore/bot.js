// this code was given to me by 1988_YumChocolate from the ROBLOX API Server, all credits (as far as I know) go to him
 
 
 
const roblox = require('noblox.js');
const Discord = require('discord.js');
const client = new Discord.Client();


client.login("NjYzNDc2MzU3MzgwMTc3OTIw.Xih4Eg.-hURSXTZj6JC8pDf7dbnaUYqMo0")
 
var cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_2F6F605E08DE846968CEFF3F09B054DC78DAD5924817E4D11ACED8AA198C595B1428C3CEBA0F3C1E6522E46F830FFECA01457C81F8A32B54AF0A7776053FA119EB936B62A829D6C58072163CF448834591BC461E6DEE87F2C087955A003D89A30851267A2075A666651190158465323ECCF89B7F3E4FC17037D48747D65089B5C38E486EFB8988936CDE61C20F7AE98676F6D1EE38B1A675CDAB248914EF339F4D1B0B46238ECE2290ECD35C07A4372C2F49D8E8358757191CAADF5516853E00465D860126B1A52BF902A455DFA779C01993964364F5CB4F0403BDBF7EE04BB65EC0F23E628DCA1B205EF41372563482C40966C0BE54BB6511FE3B253DBAFA0EBA9BF14DC84ABAFE1962172B2B4ED4953EF35533F3AAB0DB2AD7122F2BC62F10A16CDA33FD67D1AFDA1F6EE0736F16D7472D2B2B";
var prefix = ';';
var groupId = 4707160;
var maximumRank = 18;
 
function login() {
    return roblox.cookieLogin(cookie);
}
 
login() // Log into ROBLOX
    .then(function() { // After the function has been executed
        console.log('Logged in.') // Log to the console that we've logged in
    })
    .catch(function(error) { // This is a catch in the case that there's an error. Not using this will result in an unhandled rejection error.
        console.log(`Login error: ${error}`) // Log the error to console if there is one.
    });
 
function isCommand(command, message){
    var command = command.toLowerCase();
    var content = message.content.toLowerCase();
    return content.startsWith(prefix + command);
}
 
client.on('message', (message) => {
    if (message.author.bot) return; // Dont answer yourself.
    var args = message.content.split(/[ ]+/)
   
    if(isCommand('setrank', message)){
       if(!message.member.roles.some(r=>["HR"].includes(r.name)) ) // OPTIONAL - Checks if the sender has the specified roles to carry on further
        return message.reply("You can't use this command.");
        var username = args[1]
        var rankIdentifier = Number(args[2]) ? Number(args[2]) : args[2];
        if (!rankIdentifier) return message.channel.send("Please enter a rank");
        if (username){
            message.channel.send(`Checking ROBLOX for ${username}`)
            roblox.getIdFromUsername(username)
            .then(function(id){
                roblox.getRankInGroup(groupId, id)
                .then(function(rank){
                    if(maximumRank <= rank){
                        message.channel.send(`${id} is rank ${rank} and not promotable.`)
                    } else {
                        message.channel.send(`${id} is rank ${rank} and promotable.`)
                        roblox.setRank(groupId, id, rankIdentifier)
                        .then(function(newRole){
                            message.channel.send(`Changed rank to ${newRole.name}`)
                        }).catch(function(err){
                            console.error(err)
                            message.channel.send("Failed to change rank.")
                        });
                    }
                }).catch(function(err){
                    message.channel.send("Couldn't get that player in the group.")
                });
            }).catch(function(err){
                message.channel.send(`Sorry, but ${username} doesn't exist on ROBLOX.`)
          });
      } else {
          message.channel.send("Please enter a username.")
      }
      return;
  }
})
