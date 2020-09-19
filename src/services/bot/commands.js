const { createMessageEmbed } = require('../messages/embed');

const onCreateGroup = (message) => {
    const embed = createMessageEmbed('Create group');
    embed.addField('X', 'X');
    message.channel.send({ embed }).then(function(msg) {
        msg.react('✌');
    });

    guild.channels.create(message.author.username, {
        type:   'text',
        parent: '466734004318502934'
    })

    message.awaitReactions((reaction, user) => (reaction.emoji.name == '✌'), 
    { max: 10, time: 0, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '✌') {
			message.reply('You reacted.');
		}
	})
	.catch(collected => {
		
	});
  };

module.exports = {
    onCreateGroup,
  };
  