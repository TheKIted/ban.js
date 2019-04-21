var discord = require('discord.js')



exports.run = async (client, message, args) => {
  message.delete();
  let votaçao = args.join(" ");
  message.channel.send("@here").then(msg => {
});
  if(!message.member.hasPermission("MANAGE_MESSAGES")){
  return message.reply("Opss! ❌ **| Você não tem permisão.**");
  }
var votaçaoembed = new discord.RichEmbed()



      .setDescription(votaçao)
      .setTitle(":bookmark: Nova votação")
      .setFooter(`Votação enviada por ${message.author.tag}`, message.author.displayAvatarURL)
      .setTimestamp()
.setColor("0x36393e");
message.channel.send(votaçaoembed)
.then(function (message) {
    message.react("✔")
    message.react("✖")
  })


}


exports.help = {
  name:"votação"
}
