const { createMessageEmbed } = require('../messages/embed');


const onCreateGroup = (message) => {
    const embed = createMessageEmbed('Create group');
    embed.addField('g!results', 'Display last 5 world records');
    embed.addField('g!ranking team', 'Display top 30 team ranking');
    message.channel.send({ embed });
    message.react("756827303664943166");

    message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '✌') {
			message.reply('you reacted with a thumbs up.');
		}
	})
	.catch(collected => {
		
	});
  };

module.exports = {
    onCreateGroup,
  };
  