import { Client, GatewayIntentBits, Collection } from "discord.js";
import { readdirSync } from "fs";
import "dotenv/config";

const client = new Client({
    intents: [
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildInvites,
    ]

});

readdirSync("./events").forEach(async file => {

    const events = await import(`./events/${file}`).then(e => e.default);
    events(client);

});

client.command = new Collection();

client.login(process.env.token);