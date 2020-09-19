const Discord = require('discord.js');

// Default embed creation.
module.exports.createMessageEmbed = (title) => new Discord.MessageEmbed()
  .setColor(0x00AE86)
  .setTitle(' ')
  .setAuthor(`LFGUISH - ${title}`, 'https://i.imgur.com/G34L4R7.png', 'https://www.avisdetemplate.fr')
  .setFooter('© Powered by GU1SH & T3LZ 2020')
  .setTimestamp();