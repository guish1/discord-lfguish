const { createMessageEmbed } = require('../messages/embed');

const onCreateGroup = (message) => {
    const embed = createMessageEmbed('Create group');
    const group_name = "group-1";
    embed.addField('Name', group_name);
    message.channel.send({ embed }).then(function(msg) {
        msg.react('✌');
    });

    message.guild.roles.create({
        data: {
            name: group_name,
        }
    }).then(console.log);

    message.guild.channels.create(group_name, {
        type:   'text',
        parent: '466734004318502934',
        permissionOverwrites: [
            {
                id:     '466731372757909514',
                deny:   ['VIEW_CHANNEL'] 
            },
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
  