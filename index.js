import { Client, GatewayIntentBits, Collection, ClientUser } from "discord.js";
import { readdirSync } from "fs";
import "dotenv/config";

// Client 
const client = new Client({
    intents: [
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildInvites,
    ],
    presence: { status: "dnd", activities: [{ name: "Bot Test", type: 0 }] }

});

// Collections
client.commands = new Collection();

// Events
readdirSync("./events").forEach(async file => {

    const events = await import(`./events/${file}`).then(e => e.default);
    events(client);

});

// Commands
readdirSync("./commands").forEach(async file => {
    const command = await import(`./commands/${file}`).then(c => c.default);
    client.commands.set(command.name, command);
}),

    client.on('interactionCreate', async (interaction) => {
        if (!interaction.isCommand()) return;

        const { commandName } = interaction;

        if (commandName === 'ping') {
            await pingCommand(interaction);
        }
    });

async function pingCommand(interaction) {
    await interaction.reply('Pong!');
}

// Login
client.login(process.env.token);