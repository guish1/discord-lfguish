const { createMessageEmbed } = require('../messages/embed');

const onCreateGroup = (message) => {
    const embed = createMessageEmbed('Create group');
    const group_name = "group-" + Math.random();
    embed.addField('Name', group_name);
    message.channel.send({ embed }).then(function(msg) {
        msg.react('✌');
    });

    message.guild.roles.create(group_name);

    message.guild.channels.create(group_name, {
        type:   'text',
        parent: '466734004318502934',
        permissionOverwrites: [
            {
                id:     message.guild.roles.everyone,
                deny:   ['VIEW_CHANNEL'] 
            },
            {
                id:     group_name,
                allow:  ['VIEW_CHANNEL']
            }
        ]
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
  