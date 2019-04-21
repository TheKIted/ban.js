const Discord = require("discord.js");
exports.run = async (bot, message, args) => {
  message.delete()
  let mensagemreturn3 = new Discord.RichEmbed()
  .setColor("0x36393e")
  .addField("Duff CommandError ", `${message.author} Oopss | **Você não tem permissão para banir bobinho(a) 😊**`)
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(mensagemreturn3).then(msg => msg.delete(10000))
  var usuario = message.mentions.members.first() || message.guild.members.get(args[0]);
  let mensagemreturn = new Discord.RichEmbed()
  .setColor("0x36393e")
  .addField("Duff CommandError ", `${message.author} Oopss | **Use:\n\nd.ban <exemplo#0186>**`)
  if (!usuario) return message.channel.send(mensagemreturn).then(msg => msg.delete(15000))

  let mensagemreturn2 = new Discord.RichEmbed()
  .setColor("0x36393e")
  .addField("Duff CommandError ", `${message.author} Oopss | **Você não pode se banir 😢**`)
  if (usuario == message.member) return message.channel.send(mensagemreturn2).then(msg => msg.delete(10000))

  let mensagemreturn4 = new Discord.RichEmbed()
  .setColor("0x36393e")
  .addField("Duff CommandError ", `${message.author} Oopss | **Não tenho permissões suficiente para banir este usuário!**`)
  if (!usuario.bannable) return message.channel.send(mensagemreturn4).then(msg => msg.delete(10000))

 
  const embed = new Discord.RichEmbed()
  .setColor("0x36393e")
  .setDescription(`${message.author}, você deseja banir ${usuario} - ${usuario.id}?`)
  message.channel.send (embed).then(msg => {
    msg.react("562377093820973096");
    msg.react("567516995470360606");

    let filtro = (reaction, usuario) => reaction.emoji.name === "certo" && usuario.id === message.author.id;
    const coletor = msg.createReactionCollector(filtro, {max: 1, time: 36000000});

    let fa = (reaction, usuario) => reaction.emoji.name === "nao" && usuario.id === message.author.id;
    const teste = msg.createReactionCollector(fa, {max: 1, time: 36000000});


    coletor.on("collect", em => {
      em.remove(message.author.id);
      usuario.ban();

      const embed4 = new Discord.RichEmbed()
      .setColor("0x36393e")
      .setThumbnail(usuario.displayAvatarURL)
      .setDescription(`**O banimento do <@${usuario.id}> foi aplicado com sucesso!**`)
      message.channel.send(embed4).then(msg => msg.delete(100))

      const embed2 = new Discord.RichEmbed()
      .setColor("0x36393e")
      .setThumbnail(usuario.displayAvatarURL)
      .addField("🚫 BANIMENTO", `**<@${usuario.id}>** foi **BANIDO(A)**\n**Banido por:** ${message.author}`)
      message.channel.send(embed2)

    });

    teste.on("collect", oi => {
      oi.remove(message.author.id);

      const embed4 = new Discord.RichEmbed()
      .setColor("0x36393e")
      .setThumbnail(usuario.displayAvatarURL)
      .setDescription(`**O banimento deste usuário foi cancelado com sucesso!**`)
      message.channel.send(embed4).then(msg => msg.delete(5000))


    });
  });

}
exports.help = {
  name: "ban",
  aliases: ['banir']
}
 
