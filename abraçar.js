const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (bot, message, args) => {

    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hugUser) return message.channel.send("Mencione alguém para abraçar");

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hug`);

    let hugEmbed = new Discord.RichEmbed()
    .setDescription(`**${message.author.username}** Abraçou **${message.mentions.users.first().username}**`)
    .setImage(body.url)
    .setColor("0x36393e")
    .setFooter(`Abraço dado por ${message.author.username}`, message.author.displayAvatarURL)

    message.channel.send(hugEmbed)

}

module.exports.help = {
  name: "abraçar"
}
