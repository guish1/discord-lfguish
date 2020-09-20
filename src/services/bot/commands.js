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

    /*const filter = (reaction) => {
        return ['✌'].includes(reaction.emoji.name);
    };
    message.awaitReactions(filter, { max: 10, time: 604800000, errors: ['time'] })
        .then(collected => {
            console.log(collected.first());
            console.log(collected.size);
            const reaction = collected.first();
    
            if (reaction.emoji.name === '✌') {
                console.log("reacted");
                const member = message.mentions.members.first();
                member.roles.add(role_id);
            } 
        })
        .catch(collected => {
        });
    */

    const filter = (reaction) => {
	    return reaction.emoji.name === '✌';
    };

    const collector = message.createReactionCollector(filter, { time: 15000 });
    collector.on('collect', (reaction, user) => {
        message.reply(`Collected ${reaction.emoji.name} from ${user.id}`);
    });

    message.channel.send({ embed }).then(function(msg) {
        msg.react('✌');
    });
  };

module.exports = {
    onCreateGroup,
};
  