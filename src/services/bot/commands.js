const { createMessageEmbed } = require('../messages/embed');

const onCreateGroup = async (message) => {
    const embed = createMessageEmbed('Create group');
    const group_name = "group-1";
    embed.addField('Name', group_name);
    message.channel.send({ embed }).then(function(msg) {
        msg.react('✌');
    });

    const role_id = (await message.guild.roles.create({
        data: {
            name: group_name,
        }
    })).id;

    message.guild.channels.create(group_name, {
        type:   'text',
        parent: '466734004318502934', // category
        permissionOverwrites: [
            {
                id:     '466731372757909514', // everyone
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
  