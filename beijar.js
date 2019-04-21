const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (bot, message, args) => {

    let kissUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kissUser) return message.channel.send("Mencione alguém para abraçar");

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/kiss`);

    let kissEmbed = new Discord.RichEmbed()
    .setDescription(`**${message.author.username}** Beijou **${message.mentions.users.first().username}**`)
    .setImage(body.url)
    .setColor("0x36393e")
    .setFooter(`Beijo dado por ${message.author.username}`, message.author.displayAvatarURL)

    message.channel.send(kissEmbed)

}

module.exports.help = {
  name: "beijar"
}
