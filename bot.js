const Discord = require("discord.js");
const client = new Discord.Client(); 

const {
    onCreateGroup,
} = require('./src/services/bot/commands');

client.on("ready", () => {
    client.user.setActivity('!commands me');
});

client.on("message", message => {
    // Get arguments as !command arg
    // First arg is main command, all others are args
    const [command, ...args] = message.content.split(' ');

    switch (command) {
        case 'g!group':
        return onCreateGroup(message);

        default:
        return null;
    }
});

client.login(process.env.BOT_TOKEN);