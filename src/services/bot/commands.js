const { createMessageEmbed } = require('../messages/embed');


const onCreateGroup = (message) => {
    const embed = createMessageEmbed('Create group');
    embed.addField('X', 'X');
    message.channel.send({ embed });
    message.react("756827303664943166");

    message.awaitReactions((reaction, user) => (reaction.emoji.name == '✌'), 
    { max: 10, time: 0, errors: ['time'] })
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
  