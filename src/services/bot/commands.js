const { createMessageEmbed } = require('../messages/embed');

const onCreateGroup = async (message) => {
    const embed = createMessageEmbed('Create group');
    const group_name = "group-1";
    embed.addField('Name', group_name);

    const role_id = (await message.guild.roles.create({
        data: {
            name: group_name,
        }
    })).id;
    message.member.roles.add(role_id)

    message.guild.channels.create(group_name, {
        type:   'text',
        parent: '466734004318502934', // category
        permissionOverwrites: [
            {
                id:     '466731372757909514', // everyone
                deny:   ['VIEW_CHANNEL'] 
            },
            {
                id:     role_id,
                allow:  ['VIEW_CHANNEL']
            }
        ]
    })

    const filter = (reaction, user) => {
        console.log(reaction);
        return ['✌'].includes(reaction.emoji.name);
    };
    message.awaitReactions(filter, 
    { max: 10, time: 604800000, errors: ['time'] }) // 1 week
	.then(collected => {
        const reaction = collected.first();
        console.log(reaction.emoji.name)

		if (reaction.emoji.name === '✌') {
            console.log(user.id);
            const member = reaction.message.guild.members.get(user.id);
            member.addRole(role_id)
        }
	})
	.catch(collected => {
		console.log("Too late");
    });
    
    message.channel.send({ embed }).then(function(msg) {
        msg.react('✌');
    });
  };

module.exports = {
    onCreateGroup,
};
  